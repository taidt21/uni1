<!-- @format -->

<template>
  <div class="d-flex breadcrumb align-items-center gap-2">
    <div class="color-main text-uppercase">{{ breakpoint1 }}</div>
    <div class="arrow"></div>
    <div class="color-main text-uppercase">{{ breakpoint2 }}</div>

    <div class="arrow" v-if="breakpoint3"></div>
    <div v-if="breakpoint3" class="color-main text-uppercase">
      {{ breakpoint3 }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  breakpoint1: String,
  breakpoint2: String,
  breakpoint3: String,
});
</script>

<style scoped>
.arrow {
  border: solid var(--dark-blue);
  border-width: 0 1px 1px 0;
  display: inline-block;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  min-width: 8px;
  min-height: 8px;
  max-width: 8px;
  max-height: 8px;
}
.color-main {
  color: var(--dark-blue);
}
.breadcrumb > div:last-child {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.breadcrumb {
  white-space: nowrap;
  flex-wrap: nowrap;
}
@media (max-width: 576px) {
  .breadcrumb > div {
    font-size: 12px !important;
  }
}
</style>
