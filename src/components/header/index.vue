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
    url: "https://baohanh.unitechvietnam.vn/?_ga=2.201182510.1624676894.1692006490-1722648524.1691329986&_gl=1*gcfszt*_ga*MTcyMjY0ODUyNC4xNjkxMzI5OTg2*_ga_N35QFTYJ9B*MTY5MjA2ODMzNS4xNS4wLjE2OTIwNjgzNDAuMC4wLjA.*_ga_HQ337W9391*MTY5MjA2ODMzNS4xNS4wLjE2OTIwNjgzNDAuMC4wLjA.",
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
      "onScroll",
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
const showPoppup = ref(false);
function togglePoppup() {
  showPoppup.value = !showPoppup.value;
}
</script>

<template lang="">
  <header class="pt-lg-1" ref="header">
    <!-- poppup -->
    <div
      class="overlay-mobile z-1 d-lg-none"
      :class="{ active: showPoppup }"
      @click="togglePoppup"></div>
    <div
      class="poppup-header d-flex flex-column gap-4 d-lg-none bg-white z-3"
      :class="{ active: showPoppup }">
      <button class="btn-close ms-auto" @click="togglePoppup"></button>
      <ul class="d-flex flex-column list-unstyled gap-3">
        <li v-for="(item, index) in listNav" :key="index">
          <router-link
            @click="togglePoppup"
            :to="item.url"
            class="text-decoration-none py-2 px-3 menu-item-link-mobile d-block"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <div class="container">
      <div class="row justify-content-between">
        <div class="col-sm-3 col-lg-2 col-4">
          <router-link class="logo-brand" to="/">
            <img src="../../assets/image/logo-main.png" alt="UNITECH" />
          </router-link>
        </div>
        <div class="col-8 d-lg-block d-none">
          <ul
            class="navbar-nav flex-row h-100 align-items-center justify-content-between">
            <li
              class="nav-item text-uppercase"
              v-for="(item, index) in listNav"
              :key="index">
              <a
                :href="item.url"
                target="_blank"
                class="nav-link"
                v-if="item.url.includes('https')"
                >{{ item.name }}</a
              >
              <router-link class="nav-link" :to="item.url" v-else>{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <div
          class="col-sm-2 col-8 d-flex align-items-center justify-content-end">
          <Button
            link="tel:0911290476"
            textBtn="Trở thành đại lý"
            class="d-none d-lg-block" />
          <button class="btn d-block d-lg-none" @click="togglePoppup">
            <img src="../../assets/image/menu.svg" alt="toggle" />
          </button>
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
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
header.onScroll {
  background: #fff;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
.poppup-header {
  height: 100vh;
  position: absolute;
  width: 80vw;
  right: 0;
  top: 0;
  padding: 16px;
  -webkit-transform: translateX(110%);
  -ms-transform: translateX(110%);
  transform: translateX(110%);
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
  -webkit-box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.3);
}
.poppup-header.active {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.menu-item-link-mobile {
  color: #000;
}
.menu-item-link-mobile.router-link-exact-active {
  background-color: var(--dark-blue);
  color: #fff;
}
.overlay-mobile {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  -webkit-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.3);
}
.overlay-mobile.active {
  pointer-events: all;
  opacity: 1;
}
@media (max-width: 992px) and (min-width: 576px) {
  .poppup-header {
    width: 60vw;
  }
}
@media (max-width: 1200px) {
  .nav-link {
    font-size: 14px;
  }
}
@media (max-width: 576px) {
  .logo-brand img {
    height: 65px;
    -o-object-fit: contain;
    object-fit: contain;
  }
}
</style>
