<script setup>
import { ref } from "vue";
import ProductItem from "./ProductItem.vue";
import { useStore } from "../stores";
import { onMounted } from "vue";

const store = useStore();
</script>

<template>
  <h2 class="title">Related Products</h2>
  <div class="items">
    <div class="item" v-for="product in store.products" :key="product.id">
      <ProductItem :item="product" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 35px;
}
.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 0 1 30%;
}
</style>
