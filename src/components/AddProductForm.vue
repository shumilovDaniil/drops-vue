<script>
import { ref } from "vue";
</script>

<template>
  <h2 class="title">Add form</h2>
  <form class="form" action="">
    <div class="form__block">
      <label for="title">Title</label>
      <input v-model="title" id="title" type="text" />
    </div>

    <div class="form__block">
      <label for="tag">Tag</label>
      <input id="tag" type="text" />
    </div>

    <div class="form__block">
      <label for="price">Price</label>
      <input id="price" type="number" />
    </div>

    <div class="form__block">
      <label for="image">Upload image</label>
      <input id="image" type="file" />
    </div>
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
</style>
