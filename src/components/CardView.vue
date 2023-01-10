<template>
  <div @click="navigateToQuiz" class="card">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const { quiz } = defineProps(["quiz"]);
const router = useRouter();

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
.card {
  width: 230px;
  height: auto;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-top: 35px;
  margin-right: 20px;
  cursor: pointer;
  background-color: #dfe6e9;
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}
h2 {
  font-family: "Nunito", sans-serif;
  color: #2c3e50;
}
p {
  font-family: "Manrope", sans-serif;
}
.card .card-text {
  padding: 0 5px;
}
.card .card-text h2 {
  font-weight: bold;
}
</style>
