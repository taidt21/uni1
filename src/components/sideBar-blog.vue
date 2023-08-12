<!-- @format -->

<script setup>
import { reactive, ref } from "vue";
import Button from "./Button.vue";
import image from "../assets/image/blog-1.jpg";
import fbIcon from "../../src/assets/image/fb-blog.jpg";
import tiktokIcon from "../../src/assets/image/tiktok.jpg";
import instaIcon from "../../src/assets/image/ig.jpg";
import ytIcon from "../../src/assets/image/yt.jpg";
const blogNews = reactive([
  {
    title:
      "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết bánh ngon đơn giản tại nhà bạn nên biết bánh ngon đơn giản tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title: "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title:
      "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết  tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title:
      "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết  tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title:
      "4 bước làm bánh ngon tại nhà bạn nên biết đơn giản tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title:
      "4 bước làm bánh ngon đơn giản  tại nhà bạn nên biết tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
  {
    title: "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết",
    date: "23/06/2022",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500S. Lorem Ipsum has been the industry's standard dum`,
    image: image,
    url: "chi-tiet-tin-tuc",
  },
]);
const social = ref([
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: fbIcon,
  },
  {
    name: "titok",
    url: "https://www.tiktok.com/",
    icon: tiktokIcon,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: instaIcon,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    icon: ytIcon,
  },
]);
</script>
<template>
  <div>
    <div class="search-container">
      <h3 class="title fw-semibold text-uppercase text-blue">Tìm kiếm</h3>
      <div class="search-form">
        <input type="text" placeholder="Tìm kiếm..." class="w-100" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="new-blog-container">
      <h3 class="title fw-semibold text-uppercase text-blue">TIN MỚI NHẤT</h3>
      <div class="new-blogs gap-3 d-flex flex-column">
        <div
          class="new-blog-item"
          v-for="(item, index) in blogNews"
          :key="index"
          v-show="index <= 5">
          <router-link :to="item.url" class="blog-news-image d-block">
            <img :src="item.image" :alt="item.title" class="img-fluid" />
          </router-link>
          <div class="blog-news-content">
            <div class="d-flex align-items-center gap-2">
              <div class="date-icon">
                <img src="../../src/assets/image/calendar.svg" alt="calendar" />
              </div>
              <div class="date-text text-blue">{{ item.date }}</div>
            </div>
            <h3 class="blogs-new-title">
              <router-link
                :to="item.url"
                class="text-black fw-medium text-decoration-none">
                {{ item.title }}
              </router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div>
      <h3 class="title fw-semibold text-uppercase text-blue">Tìm kiếm</h3>
      <div class="social-container gap-4 mt-4 d-flex">
        <a
          :href="item.url"
          target="_blank"
          class="social-item d-block"
          v-for="(item, index) in social"
          :key="index">
          <img class="img-fluid" :src="item.icon" :alt="item.name" />
        </a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="register-container">
      <h3 class="title text-uppercase text-blue fw-semibold">Đăng ký tư vấn</h3>
      <div class="d-flex flex-column gap-3">
        <div>
          <input
            type="text"
            placeholder="Họ và tên"
            class="small text-blue w-100" />
        </div>
        <div>
          <input
            type="number"
            placeholder="Số điện thoại"
            class="small text-blue w-100" />
        </div>
        <Button class="mt-4" textBtn="Đăng ký ngay" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-form input,
.register-container input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 13px 16px;
}
.title {
  font-size: 24px;
}
.blogs-new-title {
  margin-top: 11px;
}
.date-text {
  font-size: 12px;
}
.new-blog-item {
  display: flex;
}
.blogs-new-title a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-size: 14px;
  max-height: 34px;
}
.blog-news-image {
  width: 30%;
}
.blog-news-content {
  flex-shrink: 50;
  padding-left: 18px;
}
.divider {
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
  margin: 30px 0;
}
.social-item {
  width: 40px;
}
.register-container button {
  width: fit-content;
}
</style>
