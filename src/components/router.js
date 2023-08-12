/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/home/index.vue";
import About from "../page/about/index.vue";
import Product from "../page/product/index.vue";
import ProductDetail from "./ProductDetail/index.vue";
import Blog from "../page/blog/index.vue";
import BlogDetail from "../components/blogDeatail/index.vue";
import DaiLy from "../page/dai-ly/index.vue";
import Contact from "../page/contact/index.vue";
const maintenance = {
  template: "<div>User</div>",
};

const routes = [
  {
    path: "/",
    name: "Trang chủ",
    component: Home,
  },
  {
    path: "/about",
    name: "Về chúng tôi",
    component: About,
  },
  {
    path: "/product",
    name: "Sản phẩm",
    component: Product,
  },
  {
    path: "/maintenance",
    name: "Bảo hành",
    component: maintenance,
  },
  {
    path: "/blog",
    name: "Tin tức",
    component: Blog,
  },
  {
    path: "/dai-ly",
    name: "Chi nhánh",
    component: DaiLy,
  },
  {
    path: "/contact",
    name: "Liên hệ",
    component: Contact,
  },
  {
    path: "/chi-tiet-san-pham",
    name: "Chi tiết sản phẩm",
    component: ProductDetail,
  },
  {
    path: "/chi-tiet-tin-tuc",
    name: "Chi tiết tin tức",
    component: BlogDetail,
  },
];
const router = createRouter({
  history: createWebHistory("/uni/"),
  routes,
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
