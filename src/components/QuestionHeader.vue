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
header {
  margin-top: 50px;
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
