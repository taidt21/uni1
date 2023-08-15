<!-- @format -->

<script setup>
import breakpoint from "../../components/breakpoint.vue";
import Button from "../../components/Button.vue";
import titleH2 from "../../components/titleH2.vue";
import description from "../../components/description.vue";
import { reactive } from "vue";
import chatLuong from "../../../src/assets/image/chat-luong-cao.svg";
import phatTrien from "../../../src/assets/image/co-hoi-phat-trien.svg";
import chietKhau from "../../../src/assets/image/chiet-khau-cao.svg";
import hoTro from "../../../src/assets/image/ho-tro-dai-ly.svg";
import "./responsive.css";
const data = reactive([
  {
    title: "Chất lượng cao",
    icon: chatLuong,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ",
  },
  {
    title: "Cơ hội phát triển",
    icon: phatTrien,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ",
  },
  {
    title: "Chiết khấu cao",
    icon: chietKhau,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ",
  },
  {
    title: "Hỗ trợ đại lý",
    icon: hoTro,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ",
  },
]);
</script>
<template>
  <div>
    <section class="section-dai-ly-1 position-relative">
      <div class="position-absolute top-0 start-0">
        <img src="../../assets/image/gradient-dai-ly-1.png" alt="gradient" />
      </div>
      <div class="position-absolute end-0 bottom-0">
        <img
          src="../../assets/image/gradient-right-dai-ly.png"
          alt="gradient" />
      </div>
      <div class="position-absolute bottom-0 start-0">
        <img
          src="../../assets/image/gradient-bottom-dai-ly.png"
          alt="gradient" />
      </div>
      <div class="container">
        <breakpoint breakpoint1="Trang chủ" breakpoint2="Đại lý" />
        <div class="row h-100vh flex-column-reverse flex-lg-row">
          <div
            class="col-lg-6 col-12 d-flex flex-column justify-content-end position-relative mt-5 mt-lg-0 z-0">
            <div class="position-relative">
              <div class="text-banner text-dai-ly-uni position-absolute">
                UNI
              </div>
              <div class="text-banner text-dai-ly-tech position-absolute">
                TECH
              </div>
              <div class="position-absolute z-0 lo-vi-song-bg">
                <img
                  class="img-fluid"
                  src="../../assets/image/lo-vi-song-section-1-dai-ly.png"
                  alt="lò vi sóng" />
              </div>
              <img
                class="img-fluid w-100 position-relative z-1"
                src="../../assets/image/bg-section-1-dai-ly.png"
                alt="đại lý" />
            </div>
          </div>
          <div
            class="col-lg-6 col-12 d-flex align-items-center position-relative z-2">
            <div class="form-container bg-white text-center">
              <titleH2 class="text-uppercase text-center"
                >Đăng ký thành đại lý</titleH2
              >
              <description
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
                class="text-center mt-3 pt-1" />
              <div class="row row-gap-4">
                <div class="col-6">
                  <input
                    class="field d-block field w-100"
                    type="text"
                    placeholder="Họ và tên" />
                </div>
                <div class="col-6">
                  <input
                    class="field d-block field w-100"
                    type="number "
                    placeholder="Số điện thoại" />
                </div>
                <div class="col-12">
                  <input
                    type="text "
                    class="field d-block field w-100"
                    placeholder="Địa chỉ" />
                </div>
                <div class="col-12">
                  <textarea
                    class="d-block field w-100"
                    placeholder="Ghi chú"></textarea>
                </div>
              </div>
              <Button class="btn-register" textBtn="Trở thành đại lý ngay" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 2 -->
    <section class="section-dai-ly-2">
      <div class="container text-center">
        <titleH2 class="text-center"
          >TẠI SAO NÊN CHỌN UNITECH TRỞ THÀNH ĐẠI LÝ</titleH2
        >
        <div class="row mt-5 pt-3 pb-3">
          <div
            class="col-lg-3 col-6 p-2"
            v-for="(item, index) in data"
            :key="index">
            <div class="bg-white text-center box-inner position-relative z-1">
              <div class="icon-box">
                <img :src="item.icon" :alt="item.title" class="img-fluid" />
              </div>
              <h3 class="icon-title mt-4 text-blue mb-2">{{ item.title }}</h3>
              <description class="icon-content" :content="item.description" />
            </div>
          </div>
        </div>
        <Button class="mt-5" textBtn="Trở thành đại lý ngay" />
      </div>
    </section>
    <section class="section-dai-ly-3">
      <div class="container">
        <div class="d-flex inner-section-3 justify-content-center">
          <div class="box-section-3 text-center">
            <h3 class="text-blue text-uppercase fw-semibold text-center">
              Liên hệ chúng tôi
            </h3>
            <a
              class="d-flex align-items-center gap-3 mt-3 text-decoration-none mx-auto"
              href="tel:19009207">
              <span
                class="d-flex align justify-content-center align-items-center rounded-circle icon-tell">
                <img
                  class="img-fluid"
                  src="../../assets/image/call-section-3-dai-ly.svg"
                  alt="phone" />
              </span>
              <span class="d-block icon-title text-blue">19009207</span>
            </a>
            <Button
              textBtn="Liên hệ ngay"
              link="tel:19009207"
              class="btn-contact" />
          </div>
          <div class="position-relative background-section-3">
            <img
              class="img-fluid"
              src="../../assets/image/section-3-dai-ly-bg.png"
              alt="đại lý" />
            <div class="position-absolute section-3-gradient">
              <img
                src="../../assets/image/gradient-section-3-dai-ly.png"
                alt="gradient" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-dai-ly-1 {
  padding-top: 100px;
  background: #fff9f2;
}
.h-100vh {
  min-height: calc(100vh - 100px);
}
.form-container {
  max-width: 562px;
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;

  padding: 40px;
}
.form-container .field {
  padding: 12px 16px;
  border: 1px solid #032b5166;
  color: var(--dark-blue);
  font-size: 14px;
}
.form-container textarea {
  height: 126px;
}
.lo-vi-song-bg {
  left: -20%;
}
.btn-register {
  margin-top: 20px;
  margin-bottom: -90px;
}
.text-dai-ly-uni {
  top: 0;
  left: -20%;
}
.text-dai-ly-tech {
  right: -40%;
  bottom: 0;
}
.icon-title {
  font-size: 24px;
  font-weight: 600;
}
.icon-box img {
  width: 48px;
  height: 48px;
}
.box-inner {
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;
  height: 100%;
  padding: 16px 24px;
}
.section-dai-ly-2 {
  padding-top: 100px;
}
.section-dai-ly-3 {
  padding-top: 120px;
}
.box-section-3 {
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;
  max-width: 402px;
  width: 100%;
  padding-top: 35px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin-right: -110px;
}
.background-section-3 {
  margin-left: -110px;
}
.box-section-3 a {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.icon-tell {
  width: 32px;
  height: 32px;

  background-color: rgba(3, 43, 81, 0.08);
}
.icon-tell img {
  width: 18px;
}
.btn-contact {
  margin-bottom: -20px;
  margin-top: 35px;
}
.section-3-gradient {
  right: -30%;
  top: 0;
}
</style>
