<template>
  <ThinBanner
    src="https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2Fpexels-pixabay-221164.jpg?alt=media&token=5d8b0a65-bbed-493d-ba60-d7b9e20c07c4"
    title="常見問題"
    subtitle="快速找到您關心的答案"
  />
  <!-- 下面接 FAQ 內容 -->
  <section class="container py-12">
    <!-- 一般問題 -->
    <h2 class="text-center text-3xl md:text-4xl font-semibold text-primary">
      一般問題
    </h2>
    <div class="mt-6 space-y-4">
      <FaqCard
        v-for="item in general"
        :key="item.id"
        :question="item.q"
        :answer="item.a"
      />
    </div>
    <h2
      class="text-center text-3xl md:text-4xl font-semibold text-primary mt-12"
    >
      技術與產品
    </h2>
    <div class="mt-6 space-y-4">
      <FaqCard
        v-for="item in tech"
        :key="item.id"
        :question="item.q"
        :answer="item.a"
      />
    </div>
  </section>
</template>

<script setup>
import ThinBanner from '../components/ThinBanner.vue'
import FaqCard from '../components/FaqCard.vue'
import { ref } from 'vue'


const general = ref([
  { id: 'g1', q: '博恩科技主要提供哪些服務？', a: '我們提供顧問、系統導入、客製開發與維運服務。' },
  {
    id: 'g2',
    q: '你們服務哪些產業的客戶？',
    a: '金融、製造、零售、醫療與政府機關等，我們會依需求提供客製化方案。'
  },
  { id: 'g3', q: '如何開始與博恩科技合作？', a: '先透過「聯絡我們」提交需求，我們會安排專人與您聯繫。' },
])

const tech = ref([
  { id: 't1', q: 'AI自動化適用哪些業務流程？', a: '文件辨識、客服、品質檢測、預測維護等。' },
  { id: 't2', q: '雲端遷移會影響系統運作嗎？', a: '我們以漸進式策略進行，確保低風險與最小停機。' },
])
</script>
