<!-- @format -->

<script setup>
import breakpoint from "../breakpoint.vue";
import Button from "../Button.vue";
import description from "../description.vue";
import titleH2 from "../titleH2.vue";
import {
  ref,
  onMounted,
  reactive,
  onUnmounted,
  defineProps,
  defineEmits,
} from "vue";
import TitleH2 from "../titleH2.vue";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
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
import "./responsive.css";

import mayDanhTrung1 from "../../../src/assets/image/may-danh-trung-1.png";
import mayDanhTrung2 from "../../../src/assets/image/may-danh-trung-white-2.png";
import mayDanhTrung3 from "../../../src/assets/image/may-danh-trung-white-3.png";
import loNuong from "../../../src/assets/image/lo-vi-song.png";
import shopeeIcon from "../../../src/assets/image/shopee.png";
import lazadaIcon from "../../../src/assets/image/lazada.png";
import tikiIcon from "../../../src/assets/image/tiki.png";
import fbIcon from "../../../src/assets/image/facebook.png";
import canDienTu from "../../../src/assets/image/can-dien-tu-blue.png";
import loViSong from "../../../src/assets/image/lo-vi-song.png";
const imageProduct = ref([mayDanhTrung1, mayDanhTrung2, mayDanhTrung3]);

const datas = reactive([
  {
    label: "Hãng sản xuất",
    content: "Unitech",
  },
  {
    label: "Mã sản phẩm",
    content: "HU-1411",
  },
  {
    label: "Tốc độ",
    content: "5 tốc độ",
  },
  {
    label: "Công suất",
    content: "200 w",
  },
  {
    label: "Chất liệu que đánh",
    content: "Inox",
  },
  {
    label: "Hẹn giờ",
    content: "Không",
  },
  {
    label: "Chất liệu vỏ máy",
    content: "Nhựa ABS",
  },
  {
    label: "Nguồn điện áp",
    content: "220V-240V/50HZ-60Hz",
  },
  {
    label: "Trọng lượng",
    content: "840g",
  },
  {
    label: "Xuất xứ",
    content: "Trung Quốc",
  },
  {
    label: "Sản xuất tại",
    content: "Việt Nam",
  },
  {
    label: "Bảo hành",
    content: "12 tháng",
  },
]);
const ecommerces = ref([
  {
    name: "Shoppe",
    icon: shopeeIcon,
    url: "https://shopee.vn/",
  },
  {
    name: "Lazada",
    icon: lazadaIcon,
    url: "https://www.lazada.vn/",
  },
  {
    name: "Tiki",
    icon: tikiIcon,
    url: "https://tiki.vn/",
  },
  {
    name: "Facebook",
    icon: fbIcon,
    url: "https://www.facebook.com/",
  },
]);

//STICKY DATA TABLE
const rowLayout = ref(null);
const stickyElement = ref(null);
const unfixed = ref(undefined);

const sticky = ref(undefined);

function scrollSticky() {
  if (window.innerWidth > 992) {
    const heightContainer = rowLayout.value.clientHeight;
    const positionContainer = ref(undefined);
    if (rowLayout.value) {
      positionContainer.value = rowLayout.value.getBoundingClientRect().top;
    }
    if (
      window.scrollY <= heightContainer - stickyElement.value.clientHeight &&
      window.scrollY > 0
    ) {
      sticky.value = true;
      unfixed.value = false;
      if (stickyElement.value) {
        stickyElement.value.style.top = `${
          positionContainer.value + window.scrollY
        }px`;
      }
    } else if (window.scrollY <= 0) {
      sticky.value = false;
      unfixed.value = false;
    } else {
      unfixed.value = true;
      sticky.value = false;
      if (stickyElement.value) {
        stickyElement.value.style.top = "unset";
      }
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollSticky);

  if (stickyElement.value && window.innerWidth > 992) {
    const width = stickyElement.value.clientHeight;
    console.log(width);
    stickyElement.value.style.width = `${width}px`;
  }
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollSticky);
});

const dataTab = reactive([
  {
    title: "Mô tả chi tiết",
    contentTop: `Unitech - Máy đánh trứng cầm tay - HU1411 - 300W là một dòng sản phẩm có công suất mạnh mẽ 300W với những ưu điểm vượt trội: đánh trứng, đánh kem, nhào trộn bột nhanh chóng. Máy đánh trứng Unitech HU1411 là sự lựa chọn tốt nhất dành cho mọi gia đình thỏa mãn nhu cầu làm bánh và nấu nướng của người dùng.Unitech - Máy đánh trứng cầm tay - HU1411 - 300W là một dòng sản phẩm có công suất mạnh mẽ 300W với những ưu điểm vượt trội: đánh trứng, đánh kem, nhào trộn bột nhanh chóng. Máy đánh trứng Unitech HU1411 là sự lựa chọn tốt nhất dành cho mọi gia đình thỏa mãn nhu cầu làm bánh và nấu nướng của người dùng.`,
    image: mayDanhTrung1,
    contentBottom: ` Đặc điểm nổi bật của Unitech - Máy đánh trứng cầm tay - HU1411 - 300W
- Vỏ ngoài của máy đánh trứng được làm từ nhựa ABS siêu bền, nhẵn bóng ít bám bẩn, lau chùi bằng khăn ẩm sạch sẽ. Thiết kế nhỏ gọn, hiện đại, tiện dụng, tính năng tự động giúp tiết kiệm tối đa thời gian và chi phí.
- Máy hoạt động với sử dụng điện áp 1 pha 220V - 240V giúp vận hành bền bỉ, ổn định và êm ái, tiết kiệm điện. Ngoài ra máy có thể tăng tốc độ tối đa bất cứ lúc nào vì sản phẩm còn có chức năng gia tốc nhanh an toàn, thuận tiện trong quá trình sử dụng.
- Công suất hoạt động cao cho phép bạn đánh được nhiều hỗn hợp khác nhau như trứng, bột, cháo…một cách nhanh chóng và dễ dàng. HU-3110 có 5 tốc độ cùng chế độ Turbo tăng tốc cực đại giúp bạn đánh trứng, trộn bột, đánh kem hiệu quả nhất.
- Trọng lượng của máy đánh trứng cầm tay rọng lượng máy chỉ nặng 840g kích thước gọn gàng, tay cầm chắc chắn, không bị mỏi cổ tay giúp thao tác đánh vô cùng thoải mái.
– Sức khỏe cả gia đình bạn sẽ được đảm bảo vì sản phẩm được làm từ chất liệu cao cấp đảm bảo an toàn thực phẩm, vừa rất dễ vệ sinh cọ rửa bởi đặc tính dễ tháo rời của máy.`,
  },
  {
    title: "Cách sử dụng",
    contentTop: `Unitech - Máy đánh trứng cầm tay - HU1411 - 300W là một dòng sản phẩm có công suất mạnh mẽ 300W với những ưu điểm vượt trội: đánh trứng, đánh kem, nhào trộn bột nhanh chóng. Máy đánh trứng Unitech HU1411 là sự lựa chọn tốt nhất dành cho mọi gia đình thỏa mãn nhu cầu làm bánh và nấu nướng của người dùng.`,
    image: mayDanhTrung2,
    contentBottom: ` Đặc điểm nổi bật của Unitech - Máy đánh trứng cầm tay - HU1411 - 300W
- Vỏ ngoài của máy đánh trứng được làm từ nhựa ABS siêu bền, nhẵn bóng ít bám bẩn, lau chùi bằng khăn ẩm sạch sẽ. Thiết kế nhỏ gọn, hiện đại, tiện dụng, tính năng tự động giúp tiết kiệm tối đa thời gian và chi phí.
- Máy hoạt động với sử dụng điện áp 1 pha 220V - 240V giúp vận hành bền bỉ, ổn định và êm ái, tiết kiệm điện. Ngoài ra máy có thể tăng tốc độ tối đa bất cứ lúc nào vì sản phẩm còn có chức năng gia tốc nhanh an toàn, thuận tiện trong quá trình sử dụng.
- Công suất hoạt động cao cho phép bạn đánh được nhiều hỗn hợp khác nhau như trứng, bột, cháo…một cách nhanh chóng và dễ dàng. HU-3110 có 5 tốc độ cùng chế độ Turbo tăng tốc cực đại giúp bạn đánh trứng, trộn bột, đánh kem hiệu quả nhất.
- Trọng lượng của máy đánh trứng cầm tay rọng lượng máy chỉ nặng 840g kích thước gọn gàng, tay cầm chắc chắn, không bị mỏi cổ tay giúp thao tác đánh vô cùng thoải mái.
– Sức khỏe cả gia đình bạn sẽ được đảm bảo vì sản phẩm được làm từ chất liệu cao cấp đảm bảo an toàn thực phẩm, vừa rất dễ vệ sinh cọ rửa bởi đặc tính dễ tháo rời của máy.`,
  },
  {
    title: "Công dụng",
    contentTop: `Unitech - Máy đánh trứng cầm tay - HU1411 - 300W là một dòng sản phẩm có công suất mạnh mẽ 300W với những ưu điểm vượt trội: đánh trứng, đánh kem, nhào trộn bột nhanh chóng. Máy đánh trứng Unitech HU1411 là sự lựa chọn tốt nhất dành cho mọi gia đình thỏa mãn nhu cầu làm bánh và nấu nướng của người dùng.`,
    image: mayDanhTrung3,
    contentBottom: ` Đặc điểm nổi bật của Unitech - Máy đánh trứng cầm tay - HU1411 - 300W
- Vỏ ngoài của máy đánh trứng được làm từ nhựa ABS siêu bền, nhẵn bóng ít bám bẩn, lau chùi bằng khăn ẩm sạch sẽ. Thiết kế nhỏ gọn, hiện đại, tiện dụng, tính năng tự động giúp tiết kiệm tối đa thời gian và chi phí.
- Máy hoạt động với sử dụng điện áp 1 pha 220V - 240V giúp vận hành bền bỉ, ổn định và êm ái, tiết kiệm điện. Ngoài ra máy có thể tăng tốc độ tối đa bất cứ lúc nào vì sản phẩm còn có chức năng gia tốc nhanh an toàn, thuận tiện trong quá trình sử dụng.
- Công suất hoạt động cao cho phép bạn đánh được nhiều hỗn hợp khác nhau như trứng, bột, cháo…một cách nhanh chóng và dễ dàng. HU-3110 có 5 tốc độ cùng chế độ Turbo tăng tốc cực đại giúp bạn đánh trứng, trộn bột, đánh kem hiệu quả nhất.
- Trọng lượng của máy đánh trứng cầm tay rọng lượng máy chỉ nặng 840g kích thước gọn gàng, tay cầm chắc chắn, không bị mỏi cổ tay giúp thao tác đánh vô cùng thoải mái.
– Sức khỏe cả gia đình bạn sẽ được đảm bảo vì sản phẩm được làm từ chất liệu cao cấp đảm bảo an toàn thực phẩm, vừa rất dễ vệ sinh cọ rửa bởi đặc tính dễ tháo rời của máy.`,
  },
]);
const activeTab = ref(0);

function handleTab(tab) {
  activeTab.value = tab;
}

const Related = reactive([
  {
    name: "Máy đánh trứng",
    image: mayDanhTrung1,
    newPrice: "500.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung",
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrung2,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
  },
  {
    name: "Cân điện tử",
    image: mayDanhTrung3,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
  },
  {
    name: "Cân điện tử",
    image: canDienTu,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
  },
  {
    name: "Lò nướng",
    image: loViSong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrung3,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
  },
  {
    name: "Lò nướng",
    image: loNuong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
  },
  {
    name: "Cân điện tử",
    image: canDienTu,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
  },
  {
    name: "Máy đánh trứng",
    image: mayDanhTrung1,
    newPrice: "390.000đ",
    oldPrice: "756.000đ",
    url: "may-danh-trung-2",
  },
  {
    name: "Lò nướng",
    image: loViSong,
    newPrice: "350.000đ",
    oldPrice: "806.000đ",
    url: "lo-nuong",
  },
  {
    name: "Cân điện tử",
    image: canDienTu,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
  },
  {
    name: "Cân điện tử",
    image: canDienTu,
    newPrice: "400.000đ",
    oldPrice: "56.000đ",
    url: "can-dien-tu",
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
</script>
<template>
  <div>
    <section class="section-detail-1">
      <div class="container">
        <breakpoint
          class="text-uppercase breadcrumb"
          breakpoint2="Sản phẩm"
          breakpoint3="Chi tiết sản phẩm"
          breakpoint1="Trang chủ" />
        <div class="row position-relative" ref="rowLayout">
          <div class="col-lg-4 position-relative">
            <div class="list-image d-lg-flex flex-column d-none">
              <div
                class="image-item"
                v-for="(item, index) in imageProduct"
                :key="index">
                <img class="img-fluid w-100" :src="item" alt="product" />
              </div>
            </div>
            <!-- Slide mobile -->
            <Swiper
              class="d-lg-none"
              :slides-per-view="1"
              loop="true"
              :pagination="{ clickable: true, dynamicBullets: true }"
              :space-between="16"
              :speed="800">
              <swiper-slide v-for="(item, index) in imageProduct" :key="index">
                <div class="p-4">
                  <img :src="item" alt="product" />
                </div>
              </swiper-slide>
            </Swiper>
            <!--  -->
          </div>
          <div class="col-lg-8 mt-lg-0 mt-5 position-relative">
            <div
              class="sticky-data"
              :class="{ active: sticky, noActive: unfixed }"
              ref="stickyElement">
              <titleH2>Máy đánh trứng</titleH2>
              <div class="d-flex gap-3 align-items-center">
                <div class="new-price text-blue fw-semibold">666.006đ</div>
                <div class="old-price">
                  <del class="text-blue">999.768đ</del>
                </div>
              </div>
              <h3 class="fw-semibold text-blue fs-6 mt-4 pb-1">
                Thông số kỹ thuật
              </h3>
              <div class="d-grid table-data mt-2">
                <div
                  class="d-flex justify-content-between table-data-item"
                  v-for="(item, index) in datas"
                  :key="index">
                  <div class="text-blue fw-medium data-label">
                    {{ item.label }}
                  </div>
                  <div class="data-content text-blue">{{ item.content }}</div>
                </div>
              </div>
              <h3 class="text-blue fs-6 fw-semibold mb-3 mt-4 pt-2">
                Mua hàng tại
              </h3>
              <div class="ecommerces d-flex gap-4">
                <a
                  :href="item.url"
                  target="_blank"
                  v-for="(item, index) in ecommerces"
                  :key="index">
                  <img :src="item.icon" :alt="item.name" />
                </a>
              </div>
              <Button textBtn="Liên hệ tư vấn ngay" link="tel:0911290476" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 2 -->
    <section class="section-detail-2">
      <div class="container">
        <div class="tab-container">
          <div class="overflow-auto">
            <div class="tab-contaner-title d-flex position-relative">
              <button
                class="tab-title-item text-blue fw-bold bg-transparent"
                :class="{ active: activeTab === index }"
                v-for="(item, index) in dataTab"
                :key="index"
                @click="handleTab(index, item)">
                {{ item.title }}
              </button>
            </div>
          </div>
          <div class="tab-container-content">
            <div
              class="tab-content-item"
              v-for="(item, index) in dataTab"
              :key="index"
              v-show="activeTab === index">
              <pre> <description :content="item.contentTop" /></pre>
              <div>
                <img class="img-fluid" :src="item.image" alt="product" />
              </div>
              <pre> <description :content="item.contentBottom" /> </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-detail-3">
      <div class="container">
        <TitleH2 class="text-lg-center text-start">Có thể bạn quan tâm</TitleH2>
        <swiper
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
          :pagination="{ clickable: true, dynamicBullets: true }"
          :space-between="16"
          :speed="800">
          <swiper-slide
            v-for="(item, index) in Related"
            :key="index"
            class="product-item">
            <div
              class="text-center h-100 d-flex flex-column justify-content-end">
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
              <router-link :to="item.url" class="btn-detail"
                >Xem chi tiết</router-link
              >
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<style>
.section-detail-1 {
  margin-top: 100px;
}
.section-detail-1 .breadcrumb {
  padding-top: 30px;
}
.breadcrumb div {
  font-size: 14px !important;
}
.table-data {
  grid-template-columns: repeat(2, 1fr);
}
.data-label {
  font-size: 14px;
}
.data-content {
  font-size: 12px;
}
.table-data-item {
  padding: 8px 10px;
  border-bottom: 1px solid #d7d4d4;
  gap: 16px;
}
.table-data-item:nth-child(odd) {
  border-right: 1px solid #d7d4d4;
}
.table-data {
  border: 1px solid #d7d4d4;
}
.new-price {
  font-size: 24px;
}
.old-price {
  font-size: 18px;
  opacity: 60%;
}
.ecommerces img {
  width: 40px;
}
.ecommerces {
  margin-bottom: 49px;
}
.sticky-data {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.sticky-data.noActive {
  bottom: 0;
  position: absolute;
  top: auto;
}
.sticky-data.active {
  position: fixed;

  bottom: unset;
}
.section-detail-2 {
  margin-top: 60px;
}
.tab-title-item {
  font-size: 18px;
  padding-bottom: 11px;
  position: relative;
  overflow: hidden;
}

.tab-title-item::after {
  content: "";
  border-top: 2px solid var(--dark-blue);
  position: absolute;
  bottom: 0;
  right: -100%;
  width: 100%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.tab-title-item.active::after {
  right: 0;
}
.border-active {
  border-top: 2px solid var(--dark-blue);
}
.tab-contaner-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  gap: 60px;
  overflow: hidden;
}
.tab-content-item pre {
  font-family: inter;
  white-space: break-spaces;
  width: 100%;
}
/**/
.section-detail-3 .swiper {
  padding-bottom: 120px;
  padding-top: 30px;
}
.section-detail-3 .product-item-name {
  font-size: 24px;
  margin-top: 24px;
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
.btn-detail {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--dark-blue);
  border: 1px solid var(--dark-blue);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;
  text-decoration: none;
  font-weight: 600;
  margin-top: 30px;
}
.product-item {
  -webkit-box-shadow: 0px 2px 50px 0px #0000000f;
  box-shadow: 0px 2px 50px 0px #0000000f;
  padding: 35px 40px;
}
.product-item-image img {
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
