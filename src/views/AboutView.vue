<template>
  <ThinBanner
    :src="bannerSrc"
    title="關於我們"
    subtitle="橫跨半導體、精密製造等領域；擅長客製化設備、檢測自動化、資料串接與設備聯網等整體解決方案"
  />
  <section class="py-16 md:py-20">
    <div class="container">
      <!-- Title + subtitle -->
      <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-semibold leading-tight">
          高品質自動化設備的<span class="text-primary">專家</span>
        </h2>
        <p class="mt-4 md:mt-5 text-muted max-w-4xl mx-auto leading-relaxed">
          我們相信好的自動化應該兼顧安全、效率與維護便利—每一個專案都從現場痛點出發，透過可追溯的設計與穩定的產線整合，讓客戶以更少的成本達成更高的產能。
        </p>
      </div>

      <!-- Numbers -->
      <dl class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
        <div class="space-y-1">
          <dd class="text-primary text-4xl md:text-5xl font-semibold">15+</dd>
          <dt class="text-muted font-semibold">技術專利</dt>
        </div>

        <div class="space-y-1">
          <dd class="text-primary text-4xl md:text-5xl font-semibold">100+</dd>
          <dt class="text-muted font-semibold">工廠落地導入</dt>
        </div>

        <div class="space-y-1">
          <dd class="text-primary text-4xl md:text-5xl font-semibold">300+</dd>
          <dt class="text-muted font-semibold">企業服務經驗</dt>
        </div>
      </dl>
    </div>
  </section>
  <section class="py-12 md:py-16 bg-surface">
    <div class="container grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
      <!-- 左側：文字 -->
      <div>
        <h2 class="text-3xl md:text-5xl font-semibold leading-tight">
          我們的<span class="text-primary">緣起</span>
        </h2>

        <p class="mt-6 text-muted leading-relaxed">
          柏恩科技成立於 2023
          年，由一群長期深耕自動化與機電整合的工程師共同創立。我們看見多數工廠在導入智慧製造時，
          常被既有流程、異質設備與人力成本綁住。
        </p>
        <p class="mt-6 text-muted leading-relaxed">
          因此，柏恩科技的使命以「可落地與可擴充」為核心，提供從機構設計、電控/程式開發到現場導入的一條龍服務，
          協助產線穩定升級、縮短節拍並提升良率。
        </p>
      </div>

      <div class="order-first md:order-none">
        <figure
          class="rounded-2xl overflow-hidden bg-surface ring-1 ring-border shadow-xl shadow-black/5"
        >
          <img
            :src="introImg"
            alt="柏恩科技團隊與專案協作情境"
            class="w-full h-full object-cover aspect-[16/10]"
          />
        </figure>
      </div>
    </div>
  </section>
  <section
    class="relative w-full min-h-[42vh] md:min-h-[50vh] isolate overflow-hidden"
  >
    <!-- 背景圖（換成你的圖片網址） -->
    <img
      :src="ctaBg"
      alt="聯絡我們背景圖"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- 深色遮罩：讓白字更清楚 -->
    <div class="absolute inset-0 bg-black/55 lg:bg-black/60"></div>

    <!-- 內容 -->
    <div
      class="relative container h-full flex flex-col items-center justify-center text-center py-14 md:py-20"
    >
      <h2 class="text-white text-4xl md:text-6xl font-semibold tracking-tight">
        需要專人諮詢服務？
      </h2>

      <p
        class="mt-5 max-w-4xl text-white/90 text-base md:text-lg leading-relaxed"
      >
        柏恩將秉持不斷的技術創新與嚴謹的品質把關，提供滿足客戶需求的高效能設備，
        探索自動化的無限可能！
      </p>

      <RouterLink
        to="/contact"
        aria-label="前往聯絡我們頁面"
        class="btn-primary mt-8 inline-flex items-center gap-2 shadow-lg shadow-black/20 hover:shadow-xl"
      >
        <i
          class="fa-solid fa-envelope text-base md:text-lg"
          aria-hidden="true"
        ></i>
        <span>立即諮詢</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import ThinBanner from '../components/ThinBanner.vue'

// TODO: 換成你的圖片網址
const bannerSrc =
  'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FFirefly_%E6%A9%AB%E5%BC%8F%20%E7%9C%9F%E5%AF%A6%E7%85%A7%E7%89%87%E9%A2%A8%E6%A0%BC%20%E5%9C%A8%E5%8D%8A%E5%B0%8E%E9%AB%94%E6%A5%AD%E7%9A%84%E6%99%B6%E7%89%87%E8%A3%BD%E9%80%A0%E5%B7%A5%E5%BB%A0%E8%A3%A1%E7%9A%84%E7%94%9F%E7%94%A2%E7%B7%9A%20%E7%8F%BE%E4%BB%A3%E7%A7%91%E6%8A%80%E6%84%9F%20145745.jpg?alt=media&token=522f62f7-3b67-4423-bb77-2cfb46b78745'
const introImg =
  'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FFirefly_%E6%A9%AB%E5%BC%8F%20%E7%9C%9F%E5%AF%A6%E7%85%A7%E7%89%87%E9%A2%A8%E6%A0%BC%20%E5%9C%A8%E5%8D%8A%E5%B0%8E%E9%AB%94%E6%A5%AD%E7%9A%84%E6%99%B6%E7%89%87%E8%A3%BD%E9%80%A0%E5%B7%A5%E5%BB%A0%E8%A3%A1%E7%9A%84%E7%94%9F%E7%94%A2%E7%B7%9A%20%E7%8F%BE%E4%BB%A3%E7%A7%91%E6%8A%80%E6%84%9F%20874157.jpg?alt=media&token=dd3faad9-d86a-439b-902a-85e76f62dc11'

const ctaBg = 'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FFirefly_%E6%A9%AB%E5%BC%8F%20%E7%9C%9F%E5%AF%A6%E7%85%A7%E7%89%87%E9%A2%A8%E6%A0%BC%20%E5%9C%A8%E5%8D%8A%E5%B0%8E%E9%AB%94%E6%A5%AD%E7%9A%84%E6%99%B6%E7%89%87%E8%A3%BD%E9%80%A0%E5%B7%A5%E5%BB%A0%E8%A3%A1%E7%9A%84%E7%94%9F%E7%94%A2%E7%B7%9A%20%E7%8F%BE%E4%BB%A3%E7%A7%91%E6%8A%80%E6%84%9F%20223663.jpg?alt=media&token=1a596c2b-7011-4280-88c0-09f424bfa870'
</script>
