<template>
  <header
    class="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"
  >
    <nav class="container h-16 flex items-center justify-between">
      <RouterLink
        to="/"
        class="shrink-0 flex items-center gap-3"
        aria-label="回到首頁"
      >
        <img
          class="h-10 w-auto"
          alt="公司 Logo"
          src="https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FLOGO1.png?alt=media&token=748ce257-568c-4c07-aaa2-1680954c211c"
        />
      </RouterLink>

      <!-- Desktop 導覽 -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in nav" :key="item.to">
          <RouterLink :to="item.to" v-slot="{ href, isActive, navigate }">
            <a
              :href="href"
              @click="navigate"
              class="inline-flex items-center h-10 px-1 border-b-2 font-semibold transition-colors no-underline"
              :class="[
                isActive ? 'text-primary border-primary' : 'text-text border-transparent',
                'hover:text-accent'
              ]"
            >
              {{ item.label }}
            </a>
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile 漢堡 -->
      <button
        class="md:hidden inline-flex flex-col gap-[5px] p-2 rounded border border-border"
        @click="open = !open"
        aria-label="開啟選單"
      >
        <span class="block w-6 h-[2px] bg-text"></span>
        <span class="block w-6 h-[2px] bg-text"></span>
        <span class="block w-6 h-[2px] bg-text"></span>
      </button>
    </nav>

    <!-- Mobile 選單 -->
    <transition name="fade">
      <div v-if="open" class="md:hidden border-t border-border bg-background">
        <ul class="container py-2 space-y-1">
          <li v-for="item in nav" :key="item.to">
            <RouterLink
              :to="item.to"
              class="block px-2 py-2 rounded text-text hover:bg-surface"
              @click="open = false"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const nav = [
  { label: '關於我們', to: '/about' },
  { label: '技術服務', to: '/product' },
  { label: '常見問題', to: '/faq' },
  { label: '聯絡我們', to: '/contact' }
]

const open = ref(false)
const route = useRoute()
// 換頁自動關閉手機選單
watch(() => route.fullPath, () => (open.value = false))
</script>
