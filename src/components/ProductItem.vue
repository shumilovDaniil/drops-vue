<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="item">
    <img width="300" height="300" :src="props.item.img" alt="" />
    <strong class="tag">{{ props.item.category }}</strong>
    <h4>
      <router-link :to="`/products/${props.item.id}`">{{
        props.item.title
      }}</router-link>
    </h4>
    <button class="btn">${{ props.item.price }} Add to Cart</button>
  </div>
</template>

<style scoped>
.item .tag {
  display: inline-block;
  color: gray;
  margin-bottom: 10px;
}

.item img {
  width: 100%;
  margin-bottom: 7px;
}
.item h4 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #b5ed39;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #2c390e;
}
</style>
