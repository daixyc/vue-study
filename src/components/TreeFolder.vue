<!--递归树组件-->
<template>
  <li class="treeLi">
    <span @click="toggle">
      <i v-if="hasChild" class="icon" :class="[open ? 'folder-open' : 'folder']"></i>
      <i v-if="!hasChild" class="icon file-text"></i>
      {{ demoValue.name }} ： {{ demoValue.age }}
    </span>
    <ul v-show="open" v-if="hasChild">
      <TreeFolder v-for="(item, index) in demoValue.children" v-bind:demoValue="item" :key="index"></TreeFolder>
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeFolder",
  props: ["demoValue"],
  data() {
    return {
      open: false
    };
  },
  computed: {
    demoStr() {
      return JSON.stringify(this.demo);
    },
    hasChild() {
      return this.demoValue.children && this.demoValue.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.hasChild) {
        this.open = !this.open;
      }
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  margin: 10px 0;
}

li {
  padding: 3px 0;
}

li.treeLi > span {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  width: 160px;
  height: 20px;
  text-align: left;
}

i.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.icon.folder-open {
  width: 0;
  height: 0;
  border-width: 14px 8px 0;
  border-style: solid;
  border-color: black transparent transparent;
}

.icon.folder {
  width: 0;
  height: 0;
  border-width: 0 8px 14px;
  border-style: solid;
  border-color: transparent transparent black;
}

.icon.file-text {
  background-image: url("../assets/logo.png");
}

.tree-menu li {
  line-height: 1.5;
}
</style>
