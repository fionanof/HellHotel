<script setup>
</script>

<template>
  <div class="spa-card-container">
    <!-- Linke Karte -->
    <div class="spa-card-water">
      <div class="content">
        <h3><slot name="datew">0</slot></h3>
        <br>
        <p>
          <h>Pool: </h><slot name="poolw">0</slot> Lieter |
          <h>Sauna:</h><slot name="saunaw">0</slot> Lieter |
          <p><h>Jacuzzi:</h><slot name="jacuzziw">0</slot> Lieter |
          <h>Cleaning: </h><slot name="cleaningw">0</slot> Lieter</p>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spa-card-container {
  display: flex;
  justify-content: space-between;
}

 .spa-card-water {
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%; /* Du kannst die Breite anpassen, um den gewünschten Abstand zu erreichen */
}

h {
  font-weight: 700;
}

.content {
  flex: 1;
}

.spa-card h3 {
  color: #333;
}

.spa-card p {
  margin: 5px 0;
  color: #666;
}
</style>
