<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products" :key="product.index">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
      <button @click="minusPrice">减少价格</button>
      <button @click="minusPriceAsync">异步减少</button>
    </ul>
  </div>
</template>

<script>
import store from "./../store/index";
export default {
  data() {
    return {
      products: store.state.a.products
    };
  },
  methods: {
    minusPrice() {
      this.$store.commit("minusPrice", 5); // 5 是minusPrice中的第二个参数
    },
    minusPriceAsync() {
      this.$store.dispatch("minusPriceAsync", 2);
    }
  }
};
</script>

<style scoped>
#product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
