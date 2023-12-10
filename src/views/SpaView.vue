<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const navigateToPage = (page) => {
  const router = useRouter();
  router.push(page);
};

const spaWaterList = ref([]);
const spaEnergyList = ref([]);

import SpaWaterList from "@/components/moderator/categories/Spa/SpaWaterList.vue";
import SpaEnergyList from "@/components/moderator/categories/Spa/SpaEnergyList.vue";// Hier füge den Code für das Abrufen der Daten ein

</script>

<template>
  <main>
    <h1>SpaWaterView</h1>
    <div class="buttons-container">
      <router-link to="/addspawater">Add water data</router-link>
      <router-link to="/addspaenergy">Add energy data</router-link>
    </div>
    <div class="lists-container">
      <SpaWaterList :data="spaWaterList" />
      <SpaEnergyList :data="spaEnergyList" />
    </div>
  </main>
</template>

<style scoped>
.buttons-container {
  margin-bottom: 20px;
  text-align: left;
}
.lists-container {
  display: flex;
  justify-content: space-between;
}

a {
  margin-right: 35%;
}

</style>
