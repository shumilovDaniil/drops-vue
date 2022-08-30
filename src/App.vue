<script setup>
  import Header from './components/Header/Header.vue'
  import ProductList from './components/ProductList/ProductList.vue'
</script>

<template>
  <div class="container">
    <Header></Header>
    <ProductList></ProductList>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
 
</style>
