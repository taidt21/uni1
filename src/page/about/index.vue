<!-- @format -->

<script setup scoped>
import titleH2 from "../../components/titleH2.vue";
import bannerPage from "../../components/bannerPage.vue";
import listIconHome from "../../components/list-icon-home.vue";
import description from "../../components/description.vue";
import sectionMuaHang from "../../components/section-mua-hang.vue";
import { reactive, ref } from "vue";
import "./responsive.css";
import chatLuong from "../../../src/assets/image/chat-luong.svg";
import anToan from "../../../src/assets/image/an-toan.svg";
import tuVan from "../../../src/assets/image/tu-van.svg";
import thietKe from "../../../src/assets/image/thiet-ke.svg";
const motive = reactive([
  {
    name: "Chất lượng",
    icon: chatLuong,
    description:
      "Lorem Ipsum is simply dum text of the printing and typesetting  ",
  },
  {
    name: "An toàn",
    icon: anToan,
    description:
      "Lorem Ipsum is simply dum text of the printing and typesetting  ",
  },
  {
    name: "Tư vấn 24/7",
    icon: tuVan,
    description:
      "Lorem Ipsum is simply dum text of the printing and typesetting  ",
  },
  {
    name: "Thiết kế ấn tượng",
    icon: thietKe,
    description:
      "Lorem Ipsum is simply dum text of the printing and typesetting  ",
  },
]);
const giaTriCotLoi = ref([
  "Lấy khách hàng làm trọng tâm",
  "Vì lợi ích của khách hàng, cộng sự, đối tác và của cộng đồng",
  "Tôn vinh giá trị của sự hoàn hảo",
  "Yếu tố con người là yếu tố có tính quyết định",
]);
</script>

<template>
  <div>
    <!-- SECTION 1 -->
    <bannerPage content="Về chúng tôi" />
    <!-- SECTION 2 -->
    <section class="section-about-2 position-relative">
      <div class="text-banner about-text-unitech position-absolute">
        UNITECH
      </div>
      <div class="container h-100vh d-flex flex-column">
        <div class="row flex-grow-1">
          <div class="col-md-6 my-auto">
            <titleH2 class="mb-4 pb-sm-1"
              >ĐÔI NÉT <span class="d-block fw-bold">VỀ UNITECH</span></titleH2
            >
            <description
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. Lorem Ipsum is simply dummy text." />
            <description
              class="mt-3"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. Lorem Ipsum is simply dummy text." />
            <listIconHome />
          </div>
          <div class="col-md-6 mt-auto">
            <div
              class="position-relative text-end text-sm-center text-md-start">
              <img
                src="../../assets/image/bg-section-2-about.png"
                class="img-fluid position-relative z-1 girl-section-2"
                alt="girl" />
              <div class="position-absolute lo-vi-song-about z-0">
                <img
                  src="../../assets/image/lo-vi-song-about-section-2.png"
                  alt="lò vi sóng" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-banner about-text-VN position-absolute">VIỆT NAM</div>
    </section>
    <!-- SECTION 3 -->
    <section class="section-about-3">
      <div class="container">
        <titleH2 class="text-uppercase text-center"
          >Tại sao nên chọn
          <span class="d-inline-block fw-bold">chúng tôi</span></titleH2
        >
        <div class="motives row justify-content-between mt-5">
          <div
            class="text-center col-6 col-lg-3 motive-item"
            v-for="(item, index) in motive"
            :key="index">
            <div class="text-center p-3 motive-item-inner">
              <div>
                <img class="img-fluid" :src="item.icon" :alt="item.name" />
              </div>
              <h3 class="motive-title text-blue">{{ item.name }}</h3>
              <description :content="item.description" />
            </div>
          </div>
        </div>
        <!-- GALLERY -->
        <div class="gallery d-lg-flex d-none">
          <div class="gallery-left">
            <div class="gallery-1 ms-auto">
              <img
                class="img-fluid w-100 h-100"
                src="../../assets/image/gallery1.jpg"
                alt="gallery" />
            </div>
            <div class="gallery-2">
              <img
                class="img-fluid w-100 h-100"
                src="../../assets/image/gallery2.jpg"
                alt="gallery" />
            </div>
          </div>
          <div class="gallery-center flex-grow-1">
            <div class="galley-center-row-1">
              <div class="gallery-3">
                <img
                  src="../../assets/image/gallery3.jpg"
                  alt=" gallery"
                  class="img-fluid w-100 h-100" />
              </div>
            </div>
            <div class="gallery-center-row-2 d-flex">
              <div class="gallery-4">
                <img
                  src="../../assets/image/gallery4.jpg"
                  class="img-fluid h-100"
                  alt="gallery" />
              </div>
              <div class="gallery-5">
                <img
                  class="h-100 w-100 img-fluid"
                  src="../../assets/image/gallery5.jpg"
                  alt="gallery" />
              </div>
            </div>
          </div>
          <div class="gallery-right">
            <div class="gallery-6">
              <img
                class="img-fluid h-100"
                src="../../assets/image/gallery6.jpg"
                alt="gallery" />
            </div>
          </div>
        </div>
        <!-- GALLERY MOBILE -->
        <div class="d-lg-none gallery-mobile-container">
          <div class="gallery-mobile-1 mb-3">
            <img
              src="../../assets/image/gallery3.jpg"
              alt=" gallery"
              class="img-fluid w-100 h-100" />
          </div>
          <div class="d-flex gap-3">
            <div
              class="d-flex flex-column justify-content-between gap-3 flex-grow-1">
              <div class="gallery-mobile-2">
                <img
                  class="h-100 w-100 img-fluid"
                  src="../../assets/image/gallery5.jpg"
                  alt="gallery" />
              </div>
              <div class="gallery-mobile-3">
                <img
                  src="../../assets/image/gallery3.jpg"
                  alt=" gallery"
                  class="img-fluid w-100 h-100" />
              </div>
            </div>
            <div class="gallery-mobile-4">
              <img
                class="img-fluid h-100"
                src="../../assets/image/gallery6.jpg"
                alt="gallery" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 4 -->
    <sectionMuaHang />
    <!-- SECTION 5 -->
    <section class="section-about-5">
      <div class="container">
        <div class="position-relative box-gia-tri-cot-loi">
          <div class="position-absolute bg-giatri-cotloi z-0 d-md-block d-none">
            <img
              class="img-fluid"
              src="../../assets/image/banner-gia-tri-cot-loi.jpg"
              alt="giá trị cốt lõi" />
          </div>
          <div class="position-relative z-1 bg-white box-inner">
            <titleH2>Giá trị cốt lõi</titleH2>
            <div class="gia-tri-cot-loi d-flex flex-column gap-4 mt-4">
              <div
                class="d-flex gap-3 align-items-center"
                v-for="(item, index) in giaTriCotLoi"
                :key="index">
                <div class="gia-tri-cot-loi-icon">
                  <img
                    class="img-fluid w-100"
                    src="../../assets/image/icn-item.svg"
                    alt="giá trị cốt lõi" />
                </div>

                <div>{{ item }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-md-none mt-3">
          <img
            class="img-fluid w-100"
            src="../../assets/image/banner-gia-tri-cot-loi.jpg"
            alt="giá trị cốt lõi" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.h-100vh {
  min-height: 100vh;
}
/*SECTION 2*/
.section-about-2 {
  background-image: url("../../assets/image/banner-section-2-about.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.lo-vi-song-about {
  left: 0;
  bottom: 250px;
  width: 20.3vw;
}
.girl-section-2 {
  width: 38.5vw;
}
.about-text-unitech {
  left: -25px;
  top: 7vw;
}
.about-text-VN {
  left: 7.5vw;
  bottom: 10px;
}
/*SECTION 3*/
.section-about-3 {
  padding-top: 7.5vw;
  padding-bottom: 6.8vw;
}

.motive-item {
  padding: 15px;
}
.motive-item-inner {
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;
  height: 100%;
}
.motive-title {
  font-size: 24px;
  margin-top: 26px;
}
.gallery-1 {
  width: 10.9vw;
  height: 9.5vw;
  margin-bottom: 30px;
  margin-top: 50px;
}
.gallery-2 {
  height: 12.6vw;
}
.gallery-3 {
  width: 100%;
  height: 343px;
  margin-bottom: 30px;
}
.gallery-4 {
  width: calc(30% + 30px);

  height: 10.8vw;
}
.gallery-5 {
  width: calc(70% - 30px);
  height: 13.9vw;
  margin-left: 30px;
}
.gallery-6 {
  width: 17.3vw;
  margin-top: 70px;
}
.gallery {
  gap: 30px;
  margin-top: 4.6vw;
}
.gallery img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}
/*SECTION 5*/
.section-about-5 {
  padding-top: 11.5vw;
  padding-bottom: 11.5vw;
}
.box-gia-tri-cot-loi {
  max-width: 600px;
}
.bg-giatri-cotloi {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: -37vw;
  width: 44.4vw;
  height: 35.6vw;
}
.box-inner {
  padding: 60px 40px;
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;
}
.gia-tri-cot-loi-icon {
  min-width: 16px;
  max-width: 16px;
  height: 16px;
}
.gia-tri-cot-loi-icon img {
  vertical-align: unset !important;
}
</style>
