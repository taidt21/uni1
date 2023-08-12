<!-- @format -->
<script setup>
import bannerPage from "../../components/bannerPage.vue";
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";

//image product
import mayDanhTrungWhite from "../../../src/assets/image/may-danh-trung-white.png";
import mayDanhTrungBlack from "../../../src/assets/image/may-danh-trung-black.png";
import canDienTuBlue from "../../../src/assets/image/can-dien-tu-blue.png";
import loNuong from "../../../src/assets/image/lo-vi-song.png";
const categgorys = ref(["Máy đánh trứng", "Cân điện tử", "Lò nướng"]);
const products = reactive([
  {
    name: "Máy đánh trứng",
    image: mayDanhTrungWhite,
    newPrice: "500.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung",
    category: categgorys.value[0],
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrungBlack,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
    category: categgorys.value[0],
  },
  {
    name: "Cân điện tử",
    image: canDienTuBlue,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
    category: categgorys.value[1],
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
    category: categgorys.value[2],
  },
  {
    name: "Cân điện tử",
    image: canDienTuBlue,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
    category: categgorys.value[1],
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
    category: categgorys.value[2],
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrungBlack,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
    category: categgorys.value[0],
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
    category: categgorys.value[2],
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
    category: categgorys.value[2],
  },
  {
    name: "Cân điện tử",
    image: canDienTuBlue,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
    category: categgorys.value[1],
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrungBlack,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
    category: categgorys.value[0],
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
    category: categgorys.value[2],
  },
  {
    name: "Cân điện tử",
    image: canDienTuBlue,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
    category: categgorys.value[1],
  },
  {
    name: "Cân điện tử",
    image: canDienTuBlue,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
    category: categgorys.value[1],
  },
]);

const filteredProducts = ref(products);

function filterProducts(category) {
  if (category === "all") {
    filteredProducts.value = products;
  } else {
    filteredProducts.value = products.filter(
      (product) => product.category === category
    );
  }
  currentPage.value = 1;
}

const currentPage = ref(1);
const itemsPerPage = 8;

// Computed property to calculate total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredProducts.value.slice(startIndex, endIndex);
});

// Method to change the current page
const changePage = (pageNumber) => {
  currentPage.value = pageNumber;
};
</script>

<template>
  <div>
    <bannerPage content="SẢN PHẨM" />
    <section class="section-2">
      <div class="container">
        <div class="d-flex gap-3 justify-content-center">
          <button class="btn-product size-lg" @click="filterProducts('all')">
            Tất cả
          </button>

          <button
            class="btn-product size-lg"
            @click="filterProducts(item)"
            v-for="(item, index) in categgorys"
            :key="index">
            {{ item }}
          </button>
        </div>
        <div class="products-container d-grid">
          <div
            class="product-item text-center"
            v-for="(item, index) in paginatedProducts"
            :key="index">
            <div class="product-image">
              <img class="img-fluid" :src="item.image" :alt="item.name" />
            </div>
            <h3 class="product-name text-black mb-3">{{ item.name }}</h3>
            <div class="d-flex justify-content-center align-items-center gap-3">
              <div class="text-blue fw-semibold">{{ item.newPrice }}</div>
              <small>
                <del class="text-blue old-price">{{ item.oldPrice }}</del>
              </small>
            </div>
            <router-link
              to="chi-tiet-san-pham"
              class="btn-product size-small mx-auto d-block fw-semibold text-decoration-none"
              >Xem chi tiết</router-link
            >
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
    </section>
  </div>
</template>

<style scoped>
.section-2 {
  padding-top: 7.5vw;
}
.products-container {
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 3.75vw;
}
.product-item {
  padding-top: 70px;
  padding-bottom: 35px;
  padding-right: 35px;
  padding-left: 35px;
  box-shadow: 0px 2px 50px 0px #0000000f;
}
.btn-product {
  border: 1px solid #032b51;
  color: var(--dark-blue);
  transition: 0.4s;
}
.btn-product:hover {
  background-color: var(--dark-blue);
  color: #fff;
}
.btn-product.size-small {
  padding: 12px 16px;
  font-size: 14px;
  margin-top: 30px;
  width: fit-content;
}
.btn-product.size-lg {
  padding: 11px 21px;
  font-size: 18px;
  font-weight: 500;
}
.product-image img {
  object-fit: contain;
  height: 232px;
  width: 100%;
}
.old-price {
  opacity: 60%;
}
.product-name {
  margin-top: 24px;
  font-size: 24px;
}
</style>
