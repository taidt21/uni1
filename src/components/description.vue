<!-- @format -->

<template>
  <p class="description">{{ content }}</p>
</template>

<script setup>
const { content } = defineProps(["content"]);
</script>

<style scoped>
.description {
  font-size: 16px;
  color: #2e2e2e;
}
</style>
