<template>
  <div>
    <!-- Hero / Banner -->
    <section class="container py-16 md:py-20">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
            以 <span class="text-primary">金黃創新</span> 驅動未來科技
          </h1>
          <p class="mt-4 text-muted max-w-prose">
            我們致力於以高效率與穩定可靠的產品，協助企業啟動智慧轉型。
          </p>
          <div class="mt-6 flex gap-3">
            <RouterLink to="/contact" class="btn-primary">
              聯絡我們
            </RouterLink>
            <RouterLink to="/tech" class="btn-secondary"> 瞭解技術 </RouterLink>
          </div>
        </div>
        <div class="card h-56 md:h-72 flex items-center justify-center">
          <!-- 可放產品示意圖/插畫 -->
          <span class="text-muted">Banner 佔位圖</span>
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
// 靜態頁面骨架
</script>
