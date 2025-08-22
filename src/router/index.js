import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const AboutView = () => import("../views/AboutView.vue");
const ProductView = () => import("../views/ProductView.vue");
const FAQView = () => import("../views/FAQView.vue");
const ContactView = () => import("../views/ContactView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { title: "首頁" } },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: { title: "關於柏恩" },
    },
    {
      path: "/product",
      name: "product",
      component: ProductView,
      meta: { title: "技術服務" },
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQView,
      meta: { title: "常見問題" },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: { title: "聯絡我們" },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// 可選：動態設定頁標題
router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | 柏恩科技 - 自動化設備的專家`
    : "柏恩科技";
});

export default router;
