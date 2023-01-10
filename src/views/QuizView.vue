<script setup>
import QuestionView from "../components/QuestionView.vue";
import QuestionHeader from "../components/QuestionHeader.vue";
import ResultView from "../components/ResultView.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuesIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(
  () => `${currentQuesIndex.value}/${quiz.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuesIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuesIndex.value) {
    showResults.value = true;
  }

  currentQuesIndex.value++;
};
</script>

<template>
  <QuestionHeader
    v-if="!showResults"
    :questionStatus="questionStatus"
    :barPercentage="barPercentage"
  />
  <div>
    <question-view
      v-if="!showResults"
      :question="quiz.questions[currentQuesIndex]"
      @selectOption="onOptionSelected"
    />
    <ResultView
      v-else
      :quizQuestionLength="quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
  </div>
</template>
