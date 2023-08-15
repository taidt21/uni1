<!-- @format -->

<template>
  <section class="section-7 position-relative d-flex align-items-end">
    <div class="position-absolute start-0 circle-center z-0">
      <img
        class="img-fluid d-none d-sm-block"
        src="../assets/image/banner-left-section-7.png"
        alt="section 7" />
    </div>
    <div class="container h-100 d-flex align-items-end position-relative z-1">
      <div class="row flex-sm-row flex-column-reverse">
        <div
          class="col-sm-6 position-relative pt-5 d-flex align-items-end pt-sm-0">
          <div
            class="position-absolute end-0 bg-section-7-custom d-sm-none z-1">
            <img
              src="../assets/image/bg-section-7-mobile.png"
              alt="background" />
          </div>
          <div class="position-relative z-1">
            <img
              class="img-fluid"
              src="../assets/image/girl-section-7.png"
              alt="girl" />
          </div>
        </div>
        <div class="col-sm-6 pb-sm-4 pb-lg-0">
          <div class="position-relative">
            <div class="position-absolute circle-title">
              <img src="../assets/image/circle-title.png" alt="circle" />
            </div>
            <titleH2 class="text-uppercase position-relative z-1">
              <span class="d-block d-sm-inline-block fw-bold"> Mua hàng </span>
              của chúng tôi tại:</titleH2
            >
          </div>
          <description
            class="mt-sm-4 mt-3"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
          <div class="list-ecommerces d-flex gap-lg-5 gap-4 mt-4 pb-4">
            <div v-for="(item, index) in ecommerces" :key="index">
              <a :href="item.url" target="_blank">
                <img class="img-fluid" :src="item.image" :alt="item.name" />
              </a>
            </div>
          </div>
          <Button textBtn="Trở thành đại lý ngay" link="/" class="mt-5" />
        </div>
      </div>
    </div>
    <div class="position-absolute end-0 circle-center z-1">
      <img
        class="img-fluid"
        src="../assets/image/circle-right-section-7.png"
        alt="circle" />
    </div>
  </section>
</template>

<script setup>
import titleH2 from "./titleH2.vue";
import Button from "./Button.vue";
import description from "./description.vue";
import { reactive } from "vue";
import shopeeIcon from "../../src/assets/image/shopee.png";
import tikiIcon from "../../src/assets/image/tiki.png";
import lazadaIcon from "../../src/assets/image/lazada.png";
import zaloIcon from "../../src/assets/image/zalo.png";
import fbIcon from "../../src/assets/image/facebook.png";
const ecommerces = reactive([
  {
    name: "Shopee",
    url: "https://shopee.vn/",
    image: shopeeIcon,
  },
  {
    name: "Tiki",
    url: "https://tiki.vn/",
    image: tikiIcon,
  },

  {
    name: "Lazada",
    url: "https://www.lazada.vn/",
    image: lazadaIcon,
  },

  {
    name: "Zalo",
    url: "https://zalo.me/pc",
    image: zaloIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    image: fbIcon,
  },
]);
</script>

<style>
.section-7 {
  background-color: #ebeef1;
  min-height: 100vh;
}
.circle-center {
  top: 50%;
  transform: translateY(-50%);
}
.circle-title {
  left: -5%;
  top: -5%;
  z-index: 0;
}
@media (max-width: 576px) {
  .section-7 {
    padding-top: 111px;
  }
  .bg-section-7-custom {
    top: 3rem;
  }
  .section-7 .circle-center {
    top: 55% !important;
    display: flex;
  }
  .section-7 .circle-center img {
    max-width: 60%;
    margin-left: auto;
  }
}
</style>
