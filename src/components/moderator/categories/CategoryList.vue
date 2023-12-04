<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/supabase";

import CategoryCard from "./CategoryCard.vue";

const categories = ref([]);
const imageUrl = ref();

const fetchCategories = async () => {
  try {
    const { data, error } = await supabase.from("room_categories").select("*");

    if (error) {
      console.error("Error fetching room categories:", error.message);
    } else {
      categories.value = data;
    }
  } catch (error) {
    console.error("Error fetching room categories:", error.message);
  }
};

const fetchImage = async () => {
  try {
    const { data, error } = await supabase.storage
      .from("public/room_categories")
      .download("1.jpg");

    if (error) {
      console.error("Error fetching room categories:", error.message);
    } else {
      return URL.createObjectURL(new Blob([data]));
    }
  } catch (error) {
    console.error("Error fetching room categories:", error.message);
  }
};

onMounted(() => {
  fetchCategories();
  imageUrl.value = fetchImage();
});
</script>

<template>
  <div class="category-list">
    <CategoryCard v-for="category of categories" :key="category.id" image="te">
      <span class="category-name">{{ category.name }}</span>
      <template v-slot:price>
        <span class="category-price">{{ category.price }}</span>
      </template>
      <template v-slot:occupancy>
        <span class="category-occupancy">{{ category.occupancy }}</span>
      </template>
      <template v-slot:description>
        <span class="category-description">{{ category.description }}</span>
      </template>
    </CategoryCard>
    <img :src="imageUrl" :alt="Test" />
  </div>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
}

.category-name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.category-price,
.category-occupancy,
.category-description {
  display: block;
  margin-top: 5px;
}
</style>
