<template>
  <ThinBanner
    src="https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-cottonbro-6153354.jpg?alt=media&token=27c5d651-21e5-4030-93db-5d098a60cef0"
    title="技術服務"
    subtitle="穩定、可擴充、以安全為先"
  />
  <section class="container py-12">
    <h1 class="section-title">產品列表</h1>
    <p class="section-subtle mt-2">代表性產品與特色</p>

    <div class="grid md:grid-cols-3 gap-6 mt-6"></div>
  </section>
</template>

<script setup>

import ThinBanner from '../components/ThinBanner.vue'

const products = [
  { id: 'a', name: '產品 A', desc: '企業級監控平台' },
  { id: 'b', name: '產品 B', desc: '高速資料匯流排' },
  { id: 'c', name: '產品 C', desc: '智慧邊緣運算模組' },
]
</script>
