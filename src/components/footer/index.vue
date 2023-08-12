<!-- @format -->

<script setup>
import { ref } from "vue";
import fbFooter from "../../../src/assets/image/fb-footer.svg";
import instaFooter from "../../../src/assets/image/insta-footer.svg";
import icon3 from "../../../src/assets/image/bxl_pinterest-alt.svg";
import twitterFooter from "../../../src/assets/image/ph_twitter-logo.svg";

import smsFooter from "../../../src/assets/image/sms.svg";
import callFooter from "../../../src/assets/image/call-calling.svg";
import locationFooter from "../../../src/assets/image/location.svg";
const listSocial = ref([
  {
    icon: fbFooter,
    url: "fb.com/januaryy.21",
  },
  {
    icon: instaFooter,
    url: "instagram.com/januaryy.21",
  },
  {
    icon: icon3,
    url: "fb.com/januaryy.21",
  },
  {
    icon: twitterFooter,
    url: "twitter.com",
  },
]);
const listContact = ref([
  {
    icon: smsFooter,
    text: "infor@univietnam.com.vn",
    url: "#",
  },
  {
    icon: callFooter,
    text: "19009207",
    url: "#",
  },
  {
    icon: locationFooter,
    text: "Tầng 2, Toà B, Chung cư Đồng Phát Parkview Tower, KCN Vĩnh Tuy, Hoàng Mai, Hà Nội 10000",
    url: "#",
  },
]);
const listServices = ref([
  {
    name: "Về chúng tôi",
    url: "/about",
  },
  {
    name: "Sản phẩm",
    url: "/product",
  },
  {
    name: "Bảo hành ",
    url: "/bao-hanh",
  },
  {
    name: "Tin tức",
    url: "/blog",
  },
  {
    name: "Đại lý",
    url: "dai-ly",
  },
  {
    name: "Liên hệ",
    url: "/contact",
  },
]);
</script>
<template>
  <footer>
    <div class="footer-main">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="logo-footer">
              <img src="../../../public/logo-main.png" />
            </div>
            <p class="fs-6 text-blue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
            <ul class="d-flex list-unstyled gap-4">
              <li
                v-for="(item, index) in listSocial"
                :key="index"
                class="social-item">
                <a
                  :href="item.url"
                  target="_blank"
                  class="d-flex justify-content-center align-items-center">
                  <img :src="item.icon" alt="social" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col pt-5 ps-5">
            <h2 class="title-footer fw-medium text-blue">Thông tin liên hệ</h2>
            <ul
              class="d-flex flex-column gap-3 list-unstyled list-contact-footer">
              <li v-for="(item, index) in listContact" :key="index">
                <a :href="item.url" class="d-flex gap-3 text-decoration-none">
                  <span class="d-block contact-icon">
                    <img :src="item.icon" alt="social" />
                  </span>
                  <span class="d-block text-blue">{{ item.text }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col pt-5 ps-5">
            <h2 class="title-footer fw-medium text-blue">Dịch vụ</h2>
            <ul
              class="d-flex flex-column gap-3 list-unstyled list-services-footer">
              <li v-for="(item, index) in listServices" :key="index">
                <a :href="item.url" class="text-blue text-decoration-none">{{
                  item.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom fs-6 text-center text-white">
      <p>© 2022 unitechVietNam. Powered by Việt Nam.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-main {
  background-color: rgba(158, 158, 158, 0.2);
  padding-top: 68px;
  padding-bottom: 50px;
}
.logo-footer {
  max-width: 237px;
}
.title-footer {
  font-size: 24px;
}
.social-item a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--dark-blue);
}
.contact-icon {
  width: 24px;
}
.footer-bottom {
  background-color: #595959;
  padding: 15px;
}
.footer-bottom p {
  opacity: 0.7;
  margin-bottom: 0;
  font-weight: 300;
}
.list-contact-footer img {
  min-width: 24px;
  max-width: 24px;
}
</style>
