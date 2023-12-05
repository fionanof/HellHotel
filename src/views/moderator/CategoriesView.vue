<script setup>
import CategoryList from "@/components/moderator/categories/CategoryList.vue";
</script>

<template>
  <main>
    <h1>CategoriesView</h1>
    <CategoryList class="category-list" />
  </main>
</template>

<style scoped>
.category-list {
  margin: 0 10vh;
  width: 100%;
}
</style>
