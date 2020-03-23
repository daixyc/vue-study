<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-loginform></my-loginform>
  </div>
</template>

<script>
import LoginForm from "./KForm/LoginForm";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    "my-loginform": LoginForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
