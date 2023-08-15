<!-- @format -->

<script setup>
import "./responsive.css";
import description from "../../components/description.vue";
import Button from "../../components/Button.vue";
import sectionMuaHang from "../../components/section-mua-hang.vue";
import { onMounted, reactive, ref, computed } from "vue";
import titleH2 from "../../components/titleH2.vue";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import useFadeInUp from "../../components/fadeIn.js";
import listIconHome from "../../components/list-icon-home.vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import product1 from "../../../src/assets/image/product-item.png";
import product2 from "../../../src/assets/image/product-item0.png";
import product3 from "../../../src/assets/image/product-item.png";
import mayDanhTrung from "../../../src/assets/image/may-danh-trung-white.png";
import canDienTu from "../../../src/assets/image/can-dien-tu-blue.png";
import starIcon from "../../../src/assets/image/star.svg";
import TaiDinh from "../../assets/image/tai-dinh.jpg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Products = ref([
  {
    name: "Lò nướng",
    image: product1,
  },
  {
    name: "Máy đánh trứng",
    image: product2,
  },
  {
    name: "Cân điện tử",
    image: product3,
  },
]);
const SlideProducts = reactive([
  {
    name: "Máy đánh trứng",
    oldPrice: "300.000đ",
    newPrice: "150.000đ",
    image: mayDanhTrung,
    url: "/chi-tiet-san-pham",
  },
  {
    name: "Cân điện tử",
    oldPrice: "800.000đ",
    newPrice: "600.000đ",
    image: canDienTu,
    url: "/chi-tiet-san-pham",
  },
]);
const checkAndDuplicateArray = (arr, targetLength) => {
  if (arr.length < targetLength) {
    while (arr.length < targetLength) {
      const duplicatedElements = arr.map((item) => ({ ...item })); // Create a shallow copy of the array elements
      arr.push(...duplicatedElements);
    }
  }
};

const dataPost = reactive([]);

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    dataPost.value = data.slice(0, 30);
  } catch (error) {
    console.error("Lấy dữ liệu thất bại: ", error);
  }
});
const reviews = reactive([
  {
    name: "Đinh Tuấn Tài",
    position: "Nội trợ",
    avatar: TaiDinh,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    stars: 3,
  },
  {
    name: "Đinh Tuấn Em",
    position: "Nội trợ",
    avatar: TaiDinh,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    stars: 5,
  },
  {
    name: "Đinh Tuấn Anh",
    position: "Nội trợ",
    avatar: TaiDinh,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    stars: 1,
  },
]);
const starReviews = ref([starIcon, starIcon, starIcon, starIcon, starIcon]);
const starCalc = (star1, star2) => ({
  active: star1 >= star2 + 1,
});

onMounted(() => {
  checkAndDuplicateArray(SlideProducts, 5);

  checkAndDuplicateArray(reviews, 5);
});
</script>
<template>
  <div>
    <!-- SECTION 1 -->
    <section
      class="banner-home position-relative d-flex flex-column flex-md-row align-items-center">
      <div class="position-absolute end-0 top-0 h-100 w-50 d-none d-md-block">
        <div class="position-absolute end-0 right-orange top-0 z-1">
          <img class="w-100" src="../../assets/image/bg-cam.png" alt="cam" />
        </div>
        <div
          class="position-absolute center-green end-0 bottom-0 z-0 d-none d-md-block">
          <img class="w-100" src="../../assets/image/bg-xanh.png" alt="xanh" />
        </div>
        <div
          class="position-absolute bottom-0 start-0 bottom-green z-1 d-none d-md-block">
          <img
            class="w-100"
            src="../../assets//image/bg-xanh-bottom.png"
            alt="xanh" />
        </div>
      </div>

      <div
        class="container h-100 d-flex align-items-center position-relative z-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="title-home">
              <span class="d-block fw-bold">UNITECH </span>
              <span class="d-block fw-bold mt-2 mt-md-3 text-uppercase"
                >Việt Nam</span
              >
            </h1>
            <description
              class="mt-3"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." />
            <Button textBtn="Xem chi tiết" link="/" class="mt-4" />
            <listIconHome />
          </div>
          <div class="col-12 col-md-auto"></div>
        </div>
      </div>
      <div class="d-md-none col-12-inner position-relative">
        <div class="position-absolute z-3 custom-position-image">
          <img src="../../assets//image/banner-main.png" alt="product" />
        </div>
        <div class="position-absolute end-0 top-0 z-1">
          <img src="../../assets/image/bong-cam-mobile-home.png" alt="orange" />
        </div>
        <div class="position-absolute end-0 bottom-0 z-0">
          <img src="../../assets/image/bong-xanh-mobile-home.png" alt="green" />
        </div>
        <div class="position-absolute bottom-0 z-1 left-custom">
          <img
            src="../../assets/image/xanh-bottom-mobile-home.png"
            alt="xanh" />
        </div>
      </div>
      <div class="position-absolute banner-product z-3 d-none d-md-block">
        <img src="../../assets//image/banner-main.png" alt="product" />
      </div>
    </section>
    <!-- SECTION 2 -->
    <section class="section-2">
      <div class="container">
        <div class="d-flex justify-content-center gap-5 gap-24">
          <div v-for="(item, index) in Products" :key="index">
            <div class="image-product text-center">
              <img class="img-fluid" :src="item.image" :alt="item.name" />
            </div>
            <h3 class="name-product text-center mt-3">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 3 -->
    <section class="section-3 position-relative d-flex align-items-center">
      <div class="container h-100 d-flex align-items-center">
        <div class="row">
          <div class="col-sm-6">
            <div class="text-banner position-absolute text-unitech">
              UNITECH
            </div>
            <titleH2>Máy đánh trứng</titleH2>
            <description
              class="mt-4"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type." />
            <Button
              class="mt-5"
              link="/chi-tiet-san-pham"
              textBtn="Xem chi tiết" />
          </div>
          <div class="col-sm-6 d-flex flex-column">
            <div class="position-absolute may-danh-trung-image z-1">
              <img
                src="../../assets/image/may-danh-trung.png"
                alt="máy đánh trứng" />
            </div>
            <div
              class="text-banner text-vietnam position-absolute bottom-0 end-0 z-0">
              VIET NAM
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 4 -->
    <section class="section-4 d-flex align-items-center position-relative">
      <div class="container d-flex h-100 align-items-center">
        <div class="row flex-column-reverse flex-sm-row gap-5 gap-sm-0">
          <div class="col-sm-6">
            <div class="position-relative">
              <div
                class="text-banner position-absolute d-sm-block d-none text-uni">
                UNI
              </div>
              <div class="text-banner text-uni-4 d-sm-none">TECH</div>
              <img
                class="d-sm-none d-block"
                src="../../assets/image/can-dien-tu-home-mobile.png"
                alt="cân điện tử" />
              <img
                class="d-none d-sm-block"
                src="../../assets/image/can-dien-tu-image.png"
                alt="cân điện tử" />
              <div class="position-absolute banh-1 z-1 d-none d-sm-block">
                <img src="../../assets/image/banh1.png" alt="cân điện tử" />
              </div>
              <div class="position-absolute banh-2 d-none d-sm-block">
                <img src="../../assets/image/banh2.png" alt="cân điện tử" />
              </div>
              <div class="position-absolute la-cay d-none d-sm-block">
                <img
                  src="../../assets/image/la-cay-image.png"
                  alt="cân điện tử" />
              </div>
            </div>
          </div>
          <div class="col-sm-6 position-relative ps-sm-5">
            <div
              class="text-banner position-absolute d-none d-sm-block text-tech">
              TECH
            </div>
            <div
              class="text-banner position-absolute d-sm-none start-0 text-uni-4">
              UNI
            </div>
            <titleH2>Cân điện tử</titleH2>
            <description
              class="mt-4"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type " />
            <Button
              textBtn="Xem chi tiết"
              link="/chi-tiet-san-pham"
              class="mt-5" />
          </div>
        </div>
      </div>
      <div class="position-absolute bottom-0 end-0 d-sm-none">
        <img
          src="../../assets/image/bong-orange-home-mobile.png"
          alt="orange" />
      </div>
    </section>
    <!-- SECTION 5 -->
    <section class="section-5 d-flex align-items-center">
      <div class="container h-100 d-flex align-items-center">
        <div class="row">
          <div
            class="col-sm-6 d-flex flex-column justify-content-center align-items-start">
            <titleH2>Lò nướng</titleH2>
            <description
              class="mt-4"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type." />
            <Button textBtn="Xem chi tiết" class="mt-4" />
          </div>
          <div class="col-sm-6 position-relative">
            <div class="position-relative z-2 lo-vi-song">
              <img
                class="lo-vi-song-custom"
                src="../../assets/image/lo-vi-song-group.png"
                alt="lò vi sóng" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 6 -->
    <section class="section-6">
      <div class="container">
        <titleH2 class="text-center mb-5">Sản phẩm mới</titleH2>
        <swiper
          class="slide-product overflow-visible"
          :slides-per-view="1"
          :breakpoints="{
            '576': {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            '992': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          navigation
          loop="true"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :space-between="16"
          :speed="800">
          <swiper-slide v-for="(item, index) in SlideProducts" :key="index">
            <div
              class="text-center h-100 d-flex flex-column justify-content-end p-5">
              <div class="product-item-image fw-semibold text-black">
                <img class="img-fluid" :src="item.image" :alt="item.name" />
              </div>
              <h3 class="text-center product-item-name mb-3">
                {{ item.name }}
              </h3>
              <div
                class="d-flex gap-3 justify-content-center align-items-center">
                <div class="newPrice fw-semibold">{{ item.newPrice }}</div>
                <div class="small">
                  <del>
                    {{ item.oldPrice }}
                  </del>
                </div>
              </div>
              <Button textBtn="Xem chi tiết" :link="item.url" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- Section 7 -->
    <sectionMuaHang />
    <!-- section 8 -->
    <section class="section-8 d-flex align-items-center">
      <div
        class="container h-100 d-flex align-items-center flex-column flex-sm-row">
        <div class="bg-white box-form position-relative">
          <div
            class="position-absolute bg-section-8 circle-center z-0 d-sm-block d-none">
            <img
              class="img-fluid"
              src="../../assets/image/bg-section-8.jpg"
              alt="background" />
          </div>
          <div class="position-relative box-form-inner z-2 bg-white">
            <titleH2 class="text-center position-relative z-1"
              >Đăng ký thành đại lý</titleH2
            >
            <description
              class="text-center position-relative z-1"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " />
            <div class="row row-gap-4 position-relative z-1">
              <div class="col-sm-6">
                <input type="text" placeholder="Họ và tên" />
              </div>
              <div class="col-sm-6">
                <input type="number" placeholder="Số điện thoại" />
              </div>
              <div class="col-12">
                <input type="text" placeholder="Địa chỉ" />
              </div>
              <div class="col-12">
                <textarea placeholder="Ghi chú"></textarea>
              </div>
              <div class="col-12 text-center mt-2">
                <Button textBtn="Trở thành đại lý ngay" />
              </div>
            </div>
          </div>
        </div>
        <div class="d-sm-none">
          <img
            class="img-fluid"
            src="../../assets/image/bg-section-8.jpg"
            alt="background" />
        </div>
      </div>
    </section>
    <!-- section 9 -->
    <section class="section-9 d-flex flex-column">
      <div
        class="container h-100 flex-grow-1 justify-content-center d-flex flex-column">
        <titleH2 class="text-center title-section-9 mb-5"
          >Tin tức & Sự kiện</titleH2
        >
        <Swiper
          class="swiper w-100 overflow-visible d-flex flex-column justify-content-center pb-sm-4"
          :slides-per-view="1"
          :breakpoints="{
            '576': {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            '992': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          navigation
          loop="true"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :space-between="16"
          :speed="800">
          <swiper-slide v-for="(item, index) in dataPost.value" :key="index">
            <div class="d-flex flex-column">
              <a :href="item.url" class="image-post flex-grow-1">
                <img class="img-fluid" :src="item.url" :alt="item.title" />
              </a>
              <div class="d-flex gap-2 align-items-center mt-3">
                <div class="date-icon-post d-flex">
                  <img
                    class="img-fluid"
                    src="../../assets/image/calendar.svg"
                    alt="calendar" />
                </div>
                <div class="small date-post">21/01/2023</div>
              </div>
              <h3 class="fw-medium name-post mt-1">{{ item.title }}</h3>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </section>
    <!-- section 10 -->
    <section class="section-10 d-flex align-items-center">
      <div class="container">
        <titleH2 class="text-sm-center mb-5"
          >Đánh giá
          <span class="d-block d-sm-inline-block fw-bold">
            khách hàng
          </span></titleH2
        >
        <swiper
          class="swiper overflow-visible pb-5"
          :slides-per-view="1"
          :breakpoints="{
            '576': {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            '992': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          loop="true"
          autoplay="true"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :space-between="16"
          :speed="800">
          <swiper-slide v-for="(item, index) in reviews" :key="index">
            <div>
              <div class="stars-review d-flex gap-2 mb-3">
                <div
                  v-for="(itemStar, indexStar) in starReviews"
                  :class="starCalc(item.stars, indexStar)"
                  :key="indexStar">
                  <img :src="itemStar" :alt="indexStar + 'star'" />
                </div>
              </div>
              <description :content="item.content" class="mb-4" />
              <div class="d-flex gap-3 align-items-center">
                <div class="avatar-review">
                  <img class="img-fluid" :src="item.avatar" :alt="item.name" />
                </div>
                <div>
                  <h3 class="name-review">{{ item.name }}</h3>
                  <div class="position-review">{{ item.position }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<style>
.banner-home {
  min-height: 100vh;
}
.title-home span {
  font-size: 50px;
  color: var(--dark-blue);
}

.banner-product {
  right: 3.8vw;
  bottom: 50%;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  width: 49vw;
}
.bottom-green {
  width: 25vw;
}
.right-orange {
  width: 22vw;
}
.center-green {
  width: 41vw;
}
/*section 2*/
.section-2 {
  padding-top: 40px;
  padding-bottom: 60px;
}
.section-2 .name-product {
  font-size: 24px;
  color: #646464;
  font-weight: 500;
}
.section-2 img {
  width: 120px;
}
/*section 3*/
.section-3 {
  min-height: 100vh;
  background-image: url(../../../src/assets/image/section-3-home.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.may-danh-trung-image {
  width: 39vw;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 7vw;
}

.text-unitech {
  left: -25px;

  top: 3.6vw;
}
/*section 4*/
.section-4 {
  min-height: 100vh;
  background-color: #fff9f2;
}
.la-cay {
  top: -36%;
  right: -51px;
}
.banh-1 {
  left: -80px;
}
.text-uni {
  left: -31%;
  top: -50%;
}
.text-tech {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: -10%;
}
/*section-5*/
.section-5 {
  background-image: url("../../assets/image/section-5-home-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
.lo-hoa {
  right: -10%;
  width: 15vw;
  bottom: 0;
}
.tach-tra {
  bottom: -20%;
  left: -25%;
  width: 25vw;
}
.lo-vi-song {
  width: 35vw;
}
.lo-vi-song-custom {
  max-width: unset !important;
  width: 140%;
}
.shadow-lo-vi-song {
  bottom: -10%;
  left: 0;
}
.shadow-lo-vi-song-2 {
  right: -50%;
}
/* SECTION 6*/
.swiper-button-prev,
.swiper-button-next {
  width: 40px !important;
  z-index: 5;
  background-color: #595959;
  height: 40px !important;
}
.swiper-button-prev {
  left: -7%;
}
.swiper-button-next {
  right: -7%;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: "" !important;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #fff;
  padding: 3px;
  display: block;
  position: absolute;
}
.swiper-button-next::before,
.swiper-button-prev::before {
  content: "";
  border: 1px solid #595959;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 5px;
  bottom: 5px;
}
.swiper-button-next::after {
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.swiper-button-prev::after {
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.section-6 .btn-main::after {
  content: none !important;
}
.section-6 .btn-main {
  margin: auto;
  background-color: transparent !important;
  border: 1px solid var(--dark-blue);
  font-size: 14px !important;
  font-weight: 600 !important;
  color: var(--dark-blue) !important;
  margin-top: 30px;
  margin-bottom: 0;
}
.section-6 .newPrice {
  color: var(--dark-blue);
  font-size: 18px;
}
.section-6 .oldPrice {
  color: var(--dark-blue);
}
.swiper-slide {
  height: unset;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  opacity: 0;
}
.swiper-slide-next + .swiper-slide,
.swiper-slide-next,
.swiper-slide-active {
  opacity: 1;
  box-shadow: 0px 2px 50px 0px #0000000f;
}
.swiper-wrapper {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.section-6 .product-item-name {
  font-size: 24px;
  margin-top: 24px;
}

.slide-product {
  padding-bottom: 165px;
}
.swiper-pagination {
  bottom: 85px !important;
}
.swiper-pagination-bullet {
  width: 20px;
  height: 6px;
  border-radius: 0;
  opacity: 40%;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  background-color: #595959 !important;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
  width: 30px;
}
/*SECTION 7*/

/*section-8*/
.section-8 {
  min-height: 100vh;
}
.bg-section-8 {
  right: -50%;
  width: 36.75vw;
  height: 46.375vw;
}
.bg-section-8 img {
  height: 100%;
}
.box-form {
  max-width: 767px;
  -webkit-box-shadow: 0px 2px 40px 0px #0000001a;
  box-shadow: 0px 2px 40px 0px #0000001a;
  background: #fff;
}
.box-form input {
  border: 1px solid #032b5166;
  height: 45px;
  padding: 12px 16px;
  color: var(--dark-blue);
  font-size: 14px;
  width: 100%;
}
.box-form textarea {
  padding: 12px 16px;
  color: var(--dark-blue);
  font-size: 14px;
  width: 100%;
  height: 120px;
  border: 1px solid #032b5166;
}
.box-form-inner {
  padding: 60px 80px;
}
/*SECTION 9*/
.section-9 {
  min-height: 100vh;
}

.name-post {
  color: rgba(46, 46, 46, 1);
  font-size: 18px;
}
.date-post {
  color: var(--dark-blue);
}
.section-9 .swiper-pagination {
  bottom: 0 !important;
}
.name-post {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 43px;
}
/*SECTION 10*/
.section-10 {
  min-height: 100vh;
}
.avatar-review {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-review img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  cursor: -webkit-grab;
  cursor: grab;
}
.name-review {
  font-size: 16px;
  color: #000;
}
.position-review {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}
.section-10 .swiper-pagination {
  bottom: 0 !important;
}
.stars-review img {
  -webkit-filter: brightness(0) saturate(100%) invert(36%) sepia(1%)
    saturate(0%) hue-rotate(150deg) brightness(90%) contrast(87%);
  filter: brightness(0) saturate(100%) invert(36%) sepia(1%) saturate(0%)
    hue-rotate(150deg) brightness(90%) contrast(87%);
}
.stars-review .active img {
  -webkit-filter: brightness(0) saturate(100%) invert(45%) sepia(99%)
    saturate(770%) hue-rotate(5deg) brightness(103%) contrast(101%);
  filter: brightness(0) saturate(100%) invert(45%) sepia(99%) saturate(770%)
    hue-rotate(5deg) brightness(103%) contrast(101%);
}
</style>
