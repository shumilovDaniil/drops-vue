<script setup>
import { ref } from "vue";
import DropsButton from "./ui/drops-button.vue";
import { useProductStore } from "../stores/product/productStore";

const title = ref("");
const category = ref("");
const price = ref(0);
const image = ref("");
const role = ref("");

const store = useProductStore();

function handleImage(e) {
  image.value = e.target.value;
}

function createProduct() {
  const newProduct = {
    title: title.value,
    category: category.value,
    price: price.value,
    image: image.value,
    role: role.value,
  };

  store.$patch((state) => {
    state.products.push(newProduct);
  });
}
</script>

<template>
  <h2 class="title">Add form</h2>

  <form @submit.prevent="createProduct" class="form" action="">
    <div class="form__block">
      <label for="title">Title</label>
      <input v-model="title" id="title" type="text" />
    </div>

    <div class="form__block">
      <label for="category">Tag</label>
      <input v-model="category" id="category" type="text" />
    </div>

    <div class="form__block">
      <label for="price">Price</label>
      <input v-model="price" id="price" type="number" />
    </div>

    <div class="form__block">
      <label for="image">Upload image</label>
      <input @change="handleImage" :value="image" id="image" type="file" />
    </div>

    <div class="form__block">
      <label for="selectRole">Chose your account</label>
      <select v-model="role" id="selectRole">
        <option value="admin">Admin</option>
        <option value="user">Danya Shumilov</option>
      </select>
      <span v-if="role === 'user'" class="error__permission">
        You don't have permission for this account
      </span>
    </div>
    <DropsButton>Create product</DropsButton>
  </form>
</template>

<style>
.title {
  font-size: 32px;
  margin-bottom: 20px;
}

.form {
  font-size: 22px;
  max-width: 340px;
}

.form__block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 20px;
}

.form__block label {
  margin-bottom: 10px;
  color: gray;
  font-weight: 300;
}
.form__block input {
  padding: 5px 10px;
  height: 30px;
  font-size: 18px;
}

.form__block select {
  padding: 5px 10px;
  height: 45px;
  font-size: 18px;
}

.error__permission {
  padding: 8px 0;
  font-size: 18px;
  color: red;
}
</style>
