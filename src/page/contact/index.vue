<!-- @format -->

<script setup>
import bannerPage from "../../components/bannerPage.vue";
import titleH2 from "../../components/titleH2.vue";
import Button from "../../components/Button.vue";
import "./responsive.css";
</script>
<template>
  <div>
    <bannerPage content="LIÊN HỆ" breakpoint1="Trang chủ" />
    <section class="section-2-contact">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <titleH2>
              LIÊN HỆ TƯ VẤN
              <span class="d-block d-md-inline-block fw-bold"
                >MIỄN PHÍ</span
              ></titleH2
            >
            <div class="d-flex gap-4 gap-md-5 mt-4">
              <div class="d-flex gap-2">
                <div
                  class="d-flex icon-contact-item align-items-center justify-content-center">
                  <img
                    src="../../assets/image/call-section-3-dai-ly.svg"
                    alt="call" />
                </div>
                <div class="text-blue">19009207</div>
              </div>

              <div class="d-flex gap-2">
                <div
                  class="d-flex icon-contact-item align-items-center justify-content-center">
                  <img src="../../assets/image/sms-contact.svg" alt="call" />
                </div>
                <div class="text-blue">infor@univietnam.com.vn</div>
              </div>
            </div>
            <div class="d-flex gap-2 mt-3">
              <div
                class="d-flex icon-contact-item align-items-center justify-content-center">
                <img
                  src="../../assets/image/location-contact.svg"
                  alt="location" />
              </div>
              <div class="text-blue">
                Tầng 2, Toà B, Chung cư Đồng Phát Parkview Tower, KCN Vĩnh Tuy,
                Hoàng Mai, Hà Nội.
              </div>
            </div>
            <div class="row row-gap-4 mt-5">
              <div class="col-sm-6">
                <input
                  class="field d-block field w-100"
                  type="text"
                  placeholder="Họ và tên" />
              </div>
              <div class="col-sm-6">
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
            <Button class="btn-register mt-5" textBtn="Gửi thông tin" />
          </div>
          <div class="col-md-6">
            <div>
              <img
                class="img-fluid w-100"
                src="../../assets/image/bg-contact.png"
                alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon-contact-item {
  min-width: 24px;
  max-width: 24px;
  height: 24px;
  background: rgba(3, 43, 81, 0.08);
  border-radius: 50%;
}
.icon-contact-item img {
  width: 12px;
}
.field {
  padding: 12px 16px;
  border: 1px solid #032b5166;
  color: var(--dark-blue);
  font-size: 14px;
}
textarea {
  height: 126px;
}
</style>
