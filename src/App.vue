<script setup>
import { RouterView } from "vue-router";
</script>

<template>

  <div id="nav"> 
    <router-link to="/">Home</router-link>
    <router-link to="/mod/categories">Categories</router-link>
  </div>

  <div class="container">
    <router-view>

    </router-view>

  </div>
  
</template>
<!----
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
-->

