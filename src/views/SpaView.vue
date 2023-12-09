<script setup>
import SpaWaterList from "@/components/moderator/categories/Spa/SpaWaterList.vue";
import SpaEnergyList from "@/components/moderator/categories/Spa/SpaEnergyList.vue";
</script>

<template>
  <main>
    <h1>SpaWaterView</h1>
    <div class="lists-container">
      <SpaWaterList />
      <SpaEnergyList />
    </div>
  </main>
</template>

<style scoped>
.lists-container {
  display: flex;
  justify-content: space-between;
}
</style>

