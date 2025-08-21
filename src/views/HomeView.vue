<template>
  <div>
    <section class="relative w-full min-h-[70vh] md:min-h-[80vh] isolate">
      <!-- 背景圖 -->
      <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: `url('${heroUrl}')` }"
        aria-hidden="true"
      ></div>

      <!-- 左側加深的透明遮罩，提升文字可讀性 -->
      <div
        class="absolute inset-0 bg-black/20 lg:bg-gradient-to-r from-black/20 via-black/5 to-transparent"
      ></div>

      <!-- 內容 -->
      <div class="relative container h-full flex items-center py-16 md:py-24">
        <div class="max-w-2xl">
          <!-- 小標（可改成你要的 slogan） -->
          <p class="text-white/85 text-base md:text-lg">
            從設計到製造・提供客製化服務
          </p>

          <!-- 主標 -->
          <h1
            class="mt-2 text-white text-4xl md:text-6xl font-semibold leading-tight"
          >
            高品質<br class="hidden md:block" />
            自動化設備的專家
          </h1>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink to="/contact" class="btn-primary">聯絡我們</RouterLink>
            <RouterLink to="/tech" class="btn-secondary">瞭解技術</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 技術簡介 -->
    <section class="container py-12">
      <h2 class="section-title">核心技術</h2>
      <p class="section-subtle mt-1">穩定、可擴充、以安全為先</p>
      <div class="grid md:grid-cols-3 gap-6 mt-6">
        <div class="card p-5">
          <h3 class="font-semibold mb-2">高速運算</h3>
          <p class="text-sm text-muted">
            最佳化演算法與硬體親和，提升延遲與吞吐表現。
          </p>
        </div>
        <div class="card p-5">
          <h3 class="font-semibold mb-2">資料安全</h3>
          <p class="text-sm text-muted">端到端加密與權限治理，守護關鍵資料。</p>
        </div>
        <div class="card p-5">
          <h3 class="font-semibold mb-2">雲端原生</h3>
          <p class="text-sm text-muted">
            彈性伸縮與多雲部署，支援全球服務佈署。
          </p>
        </div>
      </div>
    </section>

    <!-- 代表性產品 -->
    <section class="container py-12">
      <h2 class="section-title">代表性產品</h2>
      <p class="section-subtle mt-1">選擇最符合你需求的解決方案</p>
      <div class="grid md:grid-cols-3 gap-6 mt-6">
        <article class="card p-5">
          <h3 class="font-semibold">產品 A</h3>
          <p class="text-sm text-muted mt-1">企業級監控平台</p>
          <RouterLink to="/tech" class="inline-block mt-3 text-accent">
            瞭解更多 →
          </RouterLink>
        </article>
        <article class="card p-5">
          <h3 class="font-semibold">產品 B</h3>
          <p class="text-sm text-muted mt-1">高速資料匯流排</p>
          <RouterLink to="/tech" class="inline-block mt-3 text-accent">
            瞭解更多 →
          </RouterLink>
        </article>
        <article class="card p-5">
          <h3 class="font-semibold">產品 C</h3>
          <p class="text-sm text-muted mt-1">智慧邊緣運算模組</p>
          <RouterLink to="/tech" class="inline-block mt-3 text-accent">
            瞭解更多 →
          </RouterLink>
        </article>
      </div>
    </section>

    <!-- 客製化服務（含 CTA） -->
    <section class="container py-16">
      <div
        class="card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 class="text-2xl font-semibold">需要客製化服務？</h2>
          <p class="section-subtle mt-1">
            我們提供顧問諮詢與專案導入，量身打造你的最佳解。
          </p>
        </div>
        <RouterLink to="/contact" class="btn-primary"> 聯絡我們 </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>

const heroUrl =
  'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-youn-seung-jin-36101845-32778341.jpg?alt=media&token=097dad57-47d9-492e-ab66-6c5389019ab4'
</script>
