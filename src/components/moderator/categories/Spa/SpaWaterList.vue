<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/supabase";
import SpaWaterCard from "./SpaWaterCard.vue";

const spa = ref([]);

const fetchSpa = async () => {
  try {
    const { data, error } = await supabase.from("spa_water").select("*");

    if (error) {
      console.error("Error fetching spa water:", error.message);
    } else {
      spa.value = data;
    }
  } catch (error) {
    console.error("Error fetching spa water:", error.message);
  }
};


onMounted(() => {
  fetchSpa();
});
</script>

<template>
  <div class="spa-list-container">
    <!-- Linker Bereich -->
    <div class="spa-list-left">
      <SpaWaterCard v-for="spawater of spa" :key="spawater.id">
        <!-- ... (dein aktueller Code) ... -->
        <template v-slot:datew>
          <span class="spa-datew">{{ spawater.created_at }}</span>
        </template>
        <template v-slot:poolw>
          <span class="spa-poolw">{{ spawater.pool }}</span>
        </template>
        <template v-slot:saunaw>
          <span class="spa-saunaw">{{ spawater.sauna }}</span>
        </template>
        <template v-slot:jacuzziw>
          <span class="spa-jacuzziw">{{ spawater.jacuzzi }}</span>
        </template>
        <template v-slot:cleaningw>
          <span class="spa-cleaningw">{{ spawater.cleaning }}</span>
        </template>
      </SpaWaterCard>
    </div>
  </div>
</template>

<style scoped>
.spa-list-container {
  display: flex;
  gap: 10px;
}

.spa-list-left {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

</style>
