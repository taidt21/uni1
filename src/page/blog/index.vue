<!-- @format -->

<script setup>
import { reactive, ref, computed } from "vue";
import description from "../../components/description.vue";
import Button from "../../components/Button.vue";
import bannerPage from "../../components/bannerPage.vue";
import sideBarBlog from "../../components/sideBar-blog.vue";
import image from "../../../src/assets/image/blog-1.jpg";
import "./responsive.css";
const data = reactive([
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
  {
    title: "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết",
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
    title: "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết",
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
    title: "4 bước làm bánh ngon đơn giản tại nhà bạn nên biết",
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
const dataPagination = ref(data);
const currentPage = ref(1);
const itemsPerPage = ref(7); // Số phần tử trên mỗi trang
const totalPages = computed(() => {
  return Math.ceil(dataPagination.value.length / itemsPerPage.value);
});

const paginatedPost = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return dataPagination.value.slice(startIndex, endIndex);
});

const changePage = (pageNumber) => {
  currentPage.value = pageNumber;
};
</script>
<template>
  <div>
    <bannerPage
      class="section-blog-1"
      content="Tin tức"
      breakpoint1="Trang chủ" />
    <section class="section-blog-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="search-form search-form-mobile d-lg-none">
              <h3 class="title fw-semibold text-uppercase text-blue mb-3">
                Tìm kiếm
              </h3>
              <input type="text" placeholder="Tìm kiếm..." class="w-100" />
            </div>
            <div class="blog-container">
              <div
                class="blog-item"
                :class="{ first: index === 0, second: index != 0 }"
                v-for="(item, index) in paginatedPost"
                :key="index">
                <router-link class="image-blog d-block" :to="item.url">
                  <img class="img-fluid" :src="item.image" :alt="item.title" />
                </router-link>
                <div class="content-blog">
                  <h3 v-if="index === 0" class="title-blog">
                    <router-link
                      class="text-decoration-none text-black fw-medium"
                      :to="item.url">
                      {{ item.title }}
                    </router-link>
                  </h3>
                  <div
                    class="d-flex align-items-center"
                    :class="{ my4: index !== 0 }">
                    <div class="d-flex">
                      <img
                        class="img-fluid"
                        src="../../../src/assets/image/calendar.svg"
                        alt="calendar" />
                    </div>
                    <div class="text-blue text-14">
                      {{ item.date }}
                    </div>
                  </div>
                  <h3 v-if="index !== 0" class="title-blog">
                    <router-link
                      class="text-decoration-none text-black fw-medium"
                      :to="item.url">
                      {{ item.title }}
                    </router-link>
                  </h3>
                  <description
                    class="mt-3"
                    :content="item.description"
                    v-if="index === 0" />
                  <Button
                    text-btn="Xem chi tiết"
                    :link="item.url"
                    v-if="index === 0"
                    class="mt-5" />
                </div>
              </div>
            </div>
            <div class="pagination d-flex justify-content-center gap-2 mt-5">
              <button
                class="pagination-item btn-product"
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :class="{ active: pageNumber === currentPage }"
                @click="changePage(pageNumber)">
                {{ pageNumber }}
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <sideBarBlog />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.section-blog-1 .title-h2 {
  text-transform: uppercase;
}
.section-blog-2 {
  padding-top: 120px;
  padding-bottom: 70px;
}
.blog-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.btn-product {
  border: 1px solid #032b51;
  color: var(--dark-blue);
  transition: 0.4s;
}
.blog-item.first {
  grid-column: 1/4;
  width: 100%;
  display: flex;
  background: rgba(89, 89, 89, 0.05);
  margin-bottom: 30px;
}

.blog-item.first .image-blog {
  width: 70%;
}

.blog-item.first .content-blog {
  flex-shrink: 2;
  padding: 20px 30px;
}
.blog-item.second .title-blog a {
  font-size: 18px;
  -webkit-line-clamp: 2;
  max-height: 43px;
}
.title-blog a,
.blog-item.first .description {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.blog-item.first .description {
  -webkit-line-clamp: 4;
  max-height: 96px;
}

.blog-item.first .title-blog a {
  font-size: 30px;
  -webkit-line-clamp: 2;
  max-height: 108px;
}
.my4 {
  margin-top: 24px;
  margin-bottom: 10px;
}
/*SIDE BAR RIGHT*/
</style>
