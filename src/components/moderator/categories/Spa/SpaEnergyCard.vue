<script setup>
</script>

<template>
  <div class="spa-card-container">
  
    <div class="spa-card-energy">
      <div class="content">
        <h3><slot name="datee">0</slot></h3>
        <br>
        <p>
          <h>Pool: </h><slot name="poole">0</slot> A |
          <h>Sauna:</h><slot name="saunae">0</slot> A |
          <h>Jacuzzi:</h><slot name="jacuzzie">0</slot> A
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

.spa-card-energy {
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
