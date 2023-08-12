<!-- @format -->

<template>
  <section class="section-7 position-relative d-flex align-items-end">
    <div class="position-absolute start-0 circle-center z-0">
      <img
        class="img-fluid"
        src="../assets/image/banner-left-section-7.png"
        alt="section 7" />
    </div>
    <div class="container h-100 d-flex align-items-end position-relative z-1">
      <div class="row">
        <div class="col-6">
          <div>
            <img
              class="img-fluid"
              src="../assets/image/girl-section-7.png"
              alt="girl" />
          </div>
        </div>
        <div class="col-6">
          <div class="position-relative">
            <div class="position-absolute circle-title">
              <img src="../assets/image/circle-title.png" alt="circle" />
            </div>
            <titleH2
              content="Mua hàng"
              class="text-uppercase position-relative z-1" />
            <titleH2 content="của chúng tôi tại:" class="text-uppercase" />
          </div>
          <description
            class="mt-5"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
          <div class="list-ecommerces d-flex gap-5 mt-4 pb-4">
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
    <div class="position-absolute end-0 circle-center">
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
</style>
