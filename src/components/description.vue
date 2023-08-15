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
@media (max-width: 992px) {
  .description {
    font-size: 14px;
  }
}
</style>
