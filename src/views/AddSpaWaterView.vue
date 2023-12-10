<script>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import supabase from "@/supabase"; // Annahme: Du hast supabase bereits konfiguriert

export default {
  name: "AddWater",
  setup() {
    const router = useRouter();
    const pool = ref(null);
    const sauna = ref(null);
    const jacuzzi = ref(null);
    const cleaning = ref(null);

    const submitForm = async () => {
      try {
        // Übertrage die Daten an die Supabase-Datenbank
        const { data, error } = await supabase
          .from('spa_water')
          .insert([
            { pool: pool.value, sauna: sauna.value, jacuzzi: jacuzzi.value, cleaning: cleaning.value },
          ])
          .single(); // Annahme: Du erwartest nur ein einzelnes Einfügeergebnis

        if (error) {
          console.error("Error inserting data:", error.message);
          // Hier kannst du Fehlerbehandlungslogik einfügen
        } else {
          console.log("Data inserted successfully:", data);
          
          // Hier navigierst du zur gewünschten Seite
          router.push('/spa');
        }
      } catch (error) {
        console.error("Error:", error.message);
        // Hier kannst du allgemeine Fehlerbehandlungslogik einfügen
      }
    };

    return { pool, sauna, jacuzzi, cleaning, submitForm };
  },
};
</script>

<!-- Rest des Codes bleibt unverändert -->


<template>
  <form @submit.prevent="submitForm">
    <label> Pool:</label>
    <input v-model="pool" type="number" required>

    <label> Sauna:</label>
    <input v-model="sauna" type="number" required>

    <label> Jacuzzi:</label>
    <input v-model="jacuzzi" type="number" required>

    <label> Cleaning:</label>
    <input v-model="cleaning" type="number" required>

    <div class="submit">
      <button type="submit">Add water data</button>
    </div>
  </form>
</template>


<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit{
    text-align: center;
}
</style>