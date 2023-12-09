<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/supabase";
import SpaEnergyCard from "./SpaEnergyCard.vue";

const spaEnergy = ref([]);


const fetchSpaEnergy = async () => {
  try {
    const { data, error } = await supabase.from("spa_energy").select("*");

    if (error) {
      console.error("Error fetching spa energy:", error.message);
    } else {
      spaEnergy.value = data;
    }
  } catch (error) {
    console.error("Error fetching spa energy:", error.message);
  }
};

onMounted(() => {
  fetchSpaEnergy();
});
</script>

<template>
    <!-- Rechter Bereich -->
  <div class="spa-list-container">
    <div class="spa-list-right">
      <SpaEnergyCard v-for="spaenergy of spaEnergy" :key="spaenergy.id">
        <template v-slot:datee>
          <span class="spa-datee">{{ spaenergy.created_at }}</span>
        </template>
        <template v-slot:poole>
          <span class="spa-poole">{{ spaenergy.pool }}</span>
        </template>
        <template v-slot:saunae>
          <span class="spa-saunae">{{ spaenergy.sauna }}</span>
        </template>
        <template v-slot:jacuzzie>
          <span class="spa-jacuzzie">{{ spaenergy.jacuzzi }}</span>
        </template>
      </SpaEnergyCard>
    </div>
  </div> 
</template>

<style scoped>

.spa-list-container {
  display: flex;
  gap: 10px;
}

.spa-list-right {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

</style>
