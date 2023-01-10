<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="card-options">
      <CardView v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<script setup>
import CardView from "../components/CardView.vue";
import q from "../data/quizes.json";
import { ref, watch } from "vue";
const quizes = ref(q);
const search = ref("");

// watch takes 2 parameter,
// 1st is to listen
// 2nd is for a callback func to execute the logic if search changes.
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&display=swap');

header {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
header h1 {
  font-weight: bold;
  margin-right: 30px;
  color: #34495e;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
}
header input {
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(128, 128, 128, 0.1);
}

.card-options {
  display: flex;
  flex-wrap: wrap;
}
</style>
