<template>
  <div>
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      //把表单实例直接传给后代
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  methods: {
    validate(cb) {
      //全局校验
      //1.遍历所有的FormItem，执行他们的validate
      //tasks是Promise数组
      const tasks = this.$children
        .filter(item => item.prop)  //过滤 存在校验 的
        .map(item => item.validate()); //执行他们自己的校验

      Promise.all(tasks)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  }
};
</script>

<style scoped></style>
