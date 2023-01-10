<template>
  <div>
    <div class="question-container">
      <div class="question">
        <h3>{{ question.text }}</h3>
      </div>
    </div>
    <div class="answer-container">
      <div
        v-for="option in question.options"
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
        class="options"
      >
        <div class="label">
          <p>{{ option.label }}</p>
        </div>
        <div class="options-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.options {
  display: flex;
  cursor: pointer;
  margin-bottom: 7px;
}
.label {
  background-color: #83dba4;
  height: 50px;
  width: 50px;
  text-align: center;
}
.question{
  font-family: 'Roboto', sans-serif;
  color: #2C3A47;
}
.options-value {
  background-color: #cad3c8;
  height: 50px;
  width: 100%;
  text-align: left;
  padding: 0 10px;
  font-family: 'Roboto', sans-serif;
}
</style>
