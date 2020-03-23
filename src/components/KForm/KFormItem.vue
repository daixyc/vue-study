<template>
  <div>
    <!-- 1.label标签 -->
    <label class="label" v-if="labelName">{{ labelName }}</label>
    <!-- 2.插槽，用于占位  放input -->
    <slot></slot>
    <!-- 3.校验的错误提示 -->
    <span class="errInfo" v-if="error">* {{ error }}</span>
    <!-- <my-input class="myInput" v-bind="$attrs"></my-input> -->
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  inject: ["form"],
  provide() {
    return {
      //将该组件实例传给子组件，实现在子组件触发该组件的$emit
      formItem: this
    };
  },
  props: {
    labelName: {
      type: String,
      default: ""
    },
    prop: String // 校验字段名称
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //1.获取校验规则和值
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];

      //2.获取校验器，Schema参数，key是校验字段，值是检验规则
      const validator = new Schema({ [this.prop]: rules });

      //3.执行校验 参数1是校验目标
      return new Promise((resolve, reject) => {
        validator.validate({ [this.prop]: value }, errors => {
          if (errors) {
            //校验失败
            this.error = errors[0].message;
            reject();
          } else {
            //校验通过
            this.error = "";
            resolve();
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.label {
  width: 70px;
  display: inline-block;
  text-align: right;
}
.errInfo {
  height: 20px;
  line-height: 20px;
  color: red;
  font-size: 10px;
  display: inline-block;
}
</style>
