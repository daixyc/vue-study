<template>
  <div id="app">
    <div id="nav">
      <transition name="fade">
        <router-link to="/">Home</router-link>
      </transition>
      |
      <transition name="slide">
        <router-link to="/about">About</router-link>
      </transition>
      |
      <transition name="tree">
        <router-link to="/tree">Tree</router-link>
      </transition>
      |
      <transition name="tree">
        <router-link to="/about/a">Children</router-link>
      </transition>

      <!-- <button @click="goto">路由跳转</button> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push("about");
    }
  }
};
</script>
