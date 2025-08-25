<template>
  <!-- Skip to content for a11y -->

  <div class="min-h-screen flex flex-col">
    <a
      href="#content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-accent text-secondary px-3 py-1 rounded"
    >
      跳到主要內容
    </a>
    <Header />
    <main id="content" class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
  <!-- 全域 Loading -->
  <GlobalLoader v-model="visible" alt="Borne Technology 載入中" />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import GlobalLoader from './components/GlobalLoader.vue'
import { useLoaderStore } from './stores/loader'
import { storeToRefs } from 'pinia'

const loader = useLoaderStore()
const { visible } = storeToRefs(loader)

// Logo 可換你的正式網址
</script>
