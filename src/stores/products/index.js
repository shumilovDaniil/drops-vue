import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      id: 1,
      img: "https://cf.shopee.co.th/file/9beb80ec3e3bea52175221997666b3b1",
      title: "Propol Mix Api Green Spray",
      category: "Health Wellness",
      price: 18,
    },
    {
      id: 2,
      img: "data:image/png;base64,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",
      title: "Spray Spray Spray",
      category: "Strenngth & Vigor",
      price: 11,
    },
    {
      id: 3,
      img: "https://www.beeandyou.com/image/cache/catalog/product_galery/new-product-images/v2800x850_THROATSPRAY-800x850.png",
      title: "Propolis Raw Honey Throat",
      category: "Slimming",
      price: 43,
    },
  ]);

  function addProductToList(product) {
    products.value.push(product);
  }

  return { products, addProductToList };
});
