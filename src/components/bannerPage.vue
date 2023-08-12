<!-- @format -->
<script setup>
import titleH2 from "./titleH2.vue";
import breakpoint from "./breakpoint.vue";
// const { content } = defineProps(["content"]);
defineProps({
  content: String,
});
</script>

<template>
  <section class="d-flex align-items-center position-relative">
    <div class="position-absolute top-0 start-0 z-0">
      <img src="../assets/image/gradient-liner-top.png" alt="gradient" />
    </div>
    <div class="position-absolute start-0 bottom-0 z-1">
      <img src=".././assets/image/bg-left.png" alt="bg-left" />
    </div>
    <div class="container d-flex flex-column align-items-center gap-3">
      <titleH2 class="text-center" :content="content" />
      <breakpoint breakpoint1="Trang chủ" :breakpoint2="content" />
    </div>
    <div class="position-absolute end-0 bottom-0 z-1">
      <img src="../assets/image/bg-right.png" alt=" bg-right" />
    </div>
    <div class="position-absolute bottom-0 end-0 z-0">
      <img src="../assets/image/gradient-linear-bottom.png" alt="gradient" />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 315px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff9f2;
  background-size: cover;
}
</style>
