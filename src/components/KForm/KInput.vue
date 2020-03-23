<!--自定义输入框组件-->
<template>
  <div>
    <input class="input" :value="value" @input="changeValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: ["formItem"],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeValue(e) {
      this.$emit("input", e.target.value);

      //实时校验，通知父组件
      this.formItem.$emit("validate");
    }
  }
};
</script>

<style scoped>
.input {
  width: 200px;
  height: 24px;
  font-size: 14px;
  padding-left: 4px;
}
.input:force {
  border: rgb(101, 201, 204) 1px solid;
}
</style>
