<!-- @format -->

<script setup>
import { computed, ref, onMounted, onUnmounted, defineEmits } from "vue";
import Button from "../Button.vue";
const listNav = ref([
  {
    name: "Trang chủ",
    url: "/",
  },
  {
    name: "Về chúng tôi",
    url: "/about",
  },
  {
    name: "Sản phẩm",
    url: "/product",
  },
  {
    name: "Bảo hành",
    url: "/maintenance",
  },
  {
    name: "Tin tức",
    url: "/blog",
  },
  {
    name: "Đại lý",
    url: "/dai-ly",
  },
  {
    name: "Liên hệ",
    url: "/contact",
  },
]);
const header = ref(null);
const heightTop = ref(undefined);
const handleScroll = () => {
  if (header.value) {
    header.value.classList.toggle(
      "bg-white",
      window.scrollY > header.value.clientHeight
    );
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  if (header.value) {
    heightTop.value = header.value.clientHeight;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template lang="">
  <header class="pt-1" ref="header">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <a class="logo-brand" href="/">
            <img src="../../assets/image/logo-main.png" alt="UNITECH" />
          </a>
        </div>
        <div class="col-8">
          <ul
            class="navbar-nav flex-row h-100 align-items-center justify-content-between">
            <li
              class="nav-item text-uppercase"
              v-for="(item, index) in listNav"
              :key="index">
              <router-link class="nav-link" :to="item.url">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-end">
          <Button link="/" textBtn="Trở thành đại lý" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
  left: 0;
  transition: 0.3s;
}
</style>
