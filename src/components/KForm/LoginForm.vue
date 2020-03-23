<template>
  <div class="loginForm">
    <KForm :model="model" :rules="rules" ref="LoginForm">
      <!-- 用户名 -->
      <KFormItem class="contain" labelName="用户名：" prop="username">
        <KInput class="loginInput" v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <!-- 密码 -->
      <KFormItem class="contain" labelName="密  码：" prop="password">
        <KInput class="loginInput" v-model="model.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <!-- 登录按钮 -->
      <KFormItem>
        <button class="loginBut" @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KForm from "./KForm.vue";
import KFormItem from "./KFormItem.vue";
import KInput from "./KInput.vue";
import Notice from "../common/Notice";
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    login() {
      //全局校验
      this.$refs.LoginForm.validate(isValid => {
        if (isValid) {
          this.$create(Notice, {
            title: "登陆成功！",
            message: "登陆成功，请开始你的表演！",
            duration: 1500
          }).show();
        } else {
          //校验失败，弹窗提示
          this.$create(Notice, {
            title: "校验失败！",
            message: "数据校验失败，请检查！",
            duration: 1500
          }).show();
        }
      });
    }
  },
  components: {
    KFormItem,
    KForm,
    KInput
  }
};
</script>

<style scoped>
.loginForm {
  width: 300px;
  height: 180px;
  margin: 0 auto;
}
.loginBut {
  width: 74px;
  height: 32px;
  font-size: 14px;
  background-color: #95e4c1;
  border-radius: 8px;
}
.loginBut:click {
  background-color: chartreuse;
}
.loginBut:focus {
  outline: 0;
}
.contain {
  margin: 10px 0;
}
.contain .loginInput {
  display: inline-block;
}
</style>
