<template>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
