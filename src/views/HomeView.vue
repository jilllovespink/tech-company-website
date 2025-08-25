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
          <p class="text-white/85 text-base font-semibold md:text-lg">
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
            <RouterLink to="/product" class="btn-secondary"
              >瞭解技術</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 技術簡介 -->
    <section class="container max-w-7xl py-16 md:py-20">
      <h2 class="section-title text-3xl md:text-4xl">核心技術</h2>
      <p class="section-subtle mt-2 md:mt-3 text-base md:text-lg">
        穩定、可擴充、以安全為先
      </p>

      <div class="grid md:grid-cols-3 gap-8 mt-8 md:mt-10">
        <!-- 高速運算 -->
        <article
          class="card p-6 md:p-8 group relative overflow-hidden transition-all duration-300
             min-h-[420px] md:min-h-[520px]
             hover:-translate-y-1 hover:shadow-2xl
             hover:bg-gray-600/10 hover:bg-[--hover-mix]"
          style="--hover-mix: color-mix(in srgb, var(--color-surface) 95%, black 5%);"
        >
          <h3 class="text-xl md:text-2xl font-semibold leading-tight">
            高速運算
          </h3>
          <p class="mt-2 text-muted text-base md:text-lg">
            最佳化演算法與硬體親和，提升延遲與吞吐表現。
          </p>

          <figure class="mt-6 rounded-lg overflow-hidden border border-border">
            <img
              v-if="imgCompute"
              :src="imgCompute"
              alt="高速運算示意圖"
              class="w-full h-56 md:h-64 lg:h-72 object-cover transform-gpu
                 transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div
              v-else
              class="w-full h-56 md:h-64 lg:h-72 grid place-items-center text-muted text-sm bg-white/40"
            >
              示意圖
            </div>
          </figure>
        </article>

        <!-- 資料安全 -->
        <article
          class="card p-6 md:p-8 group relative overflow-hidden transition-all duration-300
             min-h-[420px] md:min-h-[520px]
             hover:-translate-y-1 hover:shadow-2xl
             hover:bg-gray-600/10 hover:bg-[--hover-mix]"
          style="--hover-mix: color-mix(in srgb, var(--color-surface) 95%, black 5%);"
        >
          <h3 class="text-xl md:text-2xl font-semibold leading-tight">
            資料安全
          </h3>
          <p class="mt-2 text-muted text-base md:text-lg">
            端到端加密與權限治理，守護關鍵資料。
          </p>

          <figure class="mt-6 rounded-lg overflow-hidden border border-border">
            <img
              v-if="imgSecurity"
              :src="imgSecurity"
              alt="資料安全示意圖"
              class="w-full h-56 md:h-64 lg:h-72 object-cover transform-gpu
                 transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div
              v-else
              class="w-full h-56 md:h-64 lg:h-72 grid place-items-center text-muted text-sm bg-white/40"
            >
              示意圖
            </div>
          </figure>
        </article>

        <!-- 雲端原生 -->
        <article
          class="card p-6 md:p-8 group relative overflow-hidden transition-all duration-300
             min-h-[420px] md:min-h-[520px]
             hover:-translate-y-1 hover:shadow-2xl
             hover:bg-gray-600/10 hover:bg-[--hover-mix]"
          style="--hover-mix: color-mix(in srgb, var(--color-surface) 95%, black 5%);"
        >
          <h3 class="text-xl md:text-2xl font-semibold leading-tight">
            雲端原生
          </h3>
          <p class="mt-2 text-muted text-base md:text-lg">
            彈性伸縮與多雲部署，支援全球服務佈署。
          </p>

          <figure class="mt-6 rounded-lg overflow-hidden border border-border">
            <img
              v-if="imgCloud"
              :src="imgCloud"
              alt="雲端原生示意圖"
              class="w-full h-56 md:h-64 lg:h-72 object-cover transform-gpu
                 transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div
              v-else
              class="w-full h-56 md:h-64 lg:h-72 grid place-items-center text-muted text-sm bg-white/40"
            >
              示意圖
            </div>
          </figure>
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

  const imgCompute  = 'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-luis-gomes-166706-546819.jpg?alt=media&token=03c410cd-52ce-4ea9-91af-d232b000dcb1'
const imgSecurity = 'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-pixabay-60504%20(1).jpg?alt=media&token=a318cfd9-1a05-47e7-8fd4-5c70f9d0c40c'
const imgCloud    = 'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-cookiecutter-1148820.jpg?alt=media&token=8a0f036f-5341-4fca-8f50-6cbb27639eae'
</script>
