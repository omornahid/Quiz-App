<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h2>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h2>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  background-color: rgb(230, 230, 230);
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 35px;
  color: darkslategrey;
}

h2 {
  font-size: 80px;
  color: #26de81;
}
</style>
