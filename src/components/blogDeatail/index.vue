<!-- @format -->

<script setup>
import sidebarblog from "../sideBar-blog.vue";
import Breakpoint from "../breakpoint.vue";
import titleH2 from "../titleH2.vue";
import description from "../description.vue";
import "./responsive.css";
</script>
<template>
  <section class="section-detaiBlog pt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <breakpoint
            breakpoint1="Trang chủ"
            breakpoint2="Tin tức"
            breakpoint3="4 bước làm bánh ngon đơn giản tại nhà bạn nên biết" />
          <div>
            <titleH2
              content="4 BƯỚC LÀM BÁNH NGON ĐƠN GIẢN TẠI NHÀ BẠN NÊN BIẾT" />
            <div class="d-flex align-items-center gap-3 mb-4">
              <div class="icon-date">
                <img
                  class="img-fluid w-100"
                  src="../../assets/image/calendar.svg"
                  alt="date" />
              </div>
              <div class="text-blue text-date">23/06/2022</div>
            </div>
            <div class="content-blog">
              <div>
                <img
                  class="img-fluid w-100"
                  src="../../assets/image/blog-1.jpg"
                  alt="image" />
              </div>
              <description
                class="text-justify mt-5"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
              <description
                class="text-justify mt-3"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
              <div class="d-flex gap-3 flex-sm-row flex-column">
                <div class="flex-grow-1">
                  <img
                    class="img-fluid w-100"
                    src="../../assets/image/blog-3.jpg"
                    alt="image" />
                </div>
                <div class="flex-grow-1">
                  <img
                    class="img-fluid w-100"
                    src="../../assets/image/blog-5.jpg"
                    alt="image" />
                </div>
              </div>
              <description
                class="text-justify mt-5"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
              <description
                class="text-justify mt-3"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <sidebarblog />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-detaiBlog {
  margin-top: 100px;
  padding-bottom: 100px;
}
.text-date {
  font-size: 18px;
}
.icon-date {
  width: 24px;
}
</style>
