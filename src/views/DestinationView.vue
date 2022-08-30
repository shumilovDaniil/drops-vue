<template>
  <div class="container">
    <Header></Header>
    <div class="wrapper">
      <div class="image">
        <img height="550" width="600" :src="destination.img" alt="" />
      </div>
      <div class="content">
        <h2>{{ destination.title }}</h2>
        <span class="content__price">${{ destination.price }}</span>
        <DropsButton>Add to Cart</DropsButton>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import Header from "../components/Header.vue";
import DropsButton from "../components/ui/drops-button.vue";

export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.find((dest) => dest.id === this.destinationId);
    },
  },
  components: { Header, DropsButton },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

.wrapper {
  display: flex;
  align-items: center;
}

.image img {
  object-fit: cover;
}

.content h2 {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 700;
}

.content__price {
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
