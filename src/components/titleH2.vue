<!-- @format -->

<template>
  <h2 class="title-h2 fw-bold">{{ content }}</h2>
</template>

<script setup>
const { content } = defineProps(["content"]);
</script>

<style scoped>
.title-h2 {
  color: var(--dark-blue);
  font-size: 40px;
}
</style>
