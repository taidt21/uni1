<!-- @format -->

<template>
  <h2 class="title-h2 fw-bold">
    <slot></slot>
  </h2>
</template>

<script setup>
const { content } = defineProps(["content"]);
</script>

<style scoped>
.title-h2 {
  color: var(--dark-blue);
  font-size: 50px;
}
@media (max-width: 992px) {
  .title-h2 {
    font-size: 35px;
  }
}
@media (max-width: 576px) {
  .title-h2 {
    font-size: 24px;
  }
}
</style>
