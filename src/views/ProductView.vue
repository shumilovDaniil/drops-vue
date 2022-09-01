<script setup>
import Header from "./../components/Header.vue";
import AddProductForm from "../components/AddProductForm.vue";
</script>

<template>
  <div class="container">
    <Header></Header>
    <AddProductForm />
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
