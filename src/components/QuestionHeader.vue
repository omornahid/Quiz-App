<template>
  <header>
    <h2>Question {{ questionStatus }}</h2>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap');
header {
  margin-top: 50px;
}
h2{
  /* font-family: 'Poppins', sans-serif; */
  font-family: 'Mukta', sans-serif;
  color: #254292;
}
.bar {
  width: 250px;
  height: 40px;
  border: 2px solid #2c3a47;
}
.completion {
  height: 100%;
  width: 0%;
  background-color: #2c3a47;
}
</style>
