<script setup>
import { defineProps } from "vue";

const props = defineProps(["imageUrl"]);
</script>

<template>
  <div class="category-card">
    <div class="image-container">
      <img :src="props.imageUrl" alt="Category Image" />
    </div>
    <div class="content">
      <h3><slot>Kategoriename</slot></h3>
      <p>Preis: <slot name="price">0.00</slot>€</p>
      <p>Belegung: <slot name="occupancy">0</slot> Personen</p>
      <p><slot name="description">Beschreibung</slot></p>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  display: flex;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.image-container {
  width: 20vh;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.content {
  flex: 1;
}

.category-card h3 {
  color: #333;
}

.category-card p {
  margin: 5px 0;
  color: #666;
}
</style>
