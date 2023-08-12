<!-- @format -->
<script setup>
import { defineProps } from "vue";
const { textBtn, link } = defineProps(["textBtn", "link"]);
const isLinkDefined = typeof link !== "undefined";
const isRouterLink = isLinkDefined && link.startsWith("/");
</script>

<template>
  <a v-if="isLinkDefined && !isRouterLink" :href="link" class="btn btn-main">
    {{ textBtn }}
  </a>
  <router-link v-else-if="isRouterLink" :to="link" class="btn btn-main">
    {{ textBtn }}
  </router-link>
  <button v-else class="btn btn-main">
    {{ textBtn }}
  </button>
</template>

<style>
.btn.btn-main {
  background-color: var(--dark-blue) !important;
  color: #fff !important;
  font-size: 14px !important;
  border-radius: 0;
  padding: 12px 24px !important;
  position: relative;
}
.btn-main::after {
  content: "";
  position: absolute;
  left: 12px;
  bottom: 12px;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border: 1px solid var(--dark-blue);
}
</style>
