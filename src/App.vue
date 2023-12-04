<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Carrois+Gothic&display=swap");

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Carrois Gothic", cursive;
}

body {
  margin: 0;
  padding: 0;
}

.content {
  flex: 1;
}
</style>
