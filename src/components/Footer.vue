<template>
  <footer class="border-t border-border mt-12 bg-surface">
    <!-- 上半：Logo / 公司簡介 + 聯絡資訊 / 公司資訊 -->
    <div class="container py-10 grid gap-10 md:grid-cols-2">
      <!-- 左：Logo + 公司簡介 -->
      <div>
        <img :src="logoUrl" alt="柏恩科技有限公司 Logo" class="h-8 w-auto" />
        <p class="mt-4 text-muted leading-7">
          引領數位轉型的創新科技解決方案公司。我們透過尖端的人工智慧、
          網路安全與雲端運算服務，協助企業發揮最大潛能。
        </p>
      </div>

      <!-- 右：聯絡資訊 + 公司資訊 -->
      <div class="grid gap-8 md:grid-cols-2">
        <!-- 聯絡資訊 -->
        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" class="text-base font-semibold">聯絡資訊</h3>
          <ul class="mt-3 space-y-3">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-phone text-primary mt-1"></i>
              <span class="text-text">+886 2 1234-5678</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-envelope text-primary mt-1"></i>
              <a
                href="mailto:contact@bornetech.com.tw"
                class="text-text hover:underline"
              >
                contact@bornetech.com.tw
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot text-primary mt-1"></i>
              <div class="text-text leading-relaxed">
                高雄市鳳山區漁村街65巷1號1樓
              </div>
            </li>
          </ul>
        </section>

        <!-- 公司資訊 -->
        <section aria-labelledby="footer-company">
          <h3 id="footer-company" class="text-base font-semibold">公司資訊</h3>
          <ul class="mt-3 space-y-2">
            <li class="flex gap-2">
              <span class="text-primary">公司名稱：</span>
              <span class="text-text">柏恩科技有限公司</span>
            </li>
            <li class="flex gap-2">
              <span class="text-primary">統一編號：</span>
              <span class="text-text">83297083</span>
            </li>
            <!-- 依需求：不顯示成立年份 -->
          </ul>
        </section>
      </div>
    </div>

    <!-- 下半：版權列 -->
    <div class="border-t border-border">
      <div
        class="container py-4 text-sm flex flex-col md:flex-row items-center justify-between gap-2"
      >
        <span class="text-muted">
          © 2025 柏恩科技有限公司 · Designed by
          <span class="text-text">DJ 網頁設計</span>
        </span>
        <span class="text-text">技術創新・品質卓越</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  logoUrl: {
    type: String,
    default:
      'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FLOGO1.png?alt=media&token=748ce257-568c-4c07-aaa2-1680954c211c'
  }
})
</script>
