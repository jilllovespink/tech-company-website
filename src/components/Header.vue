<template>
  <header
    class="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border"
  >
    <nav class="container h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2"
      >
        <span
          class="inline-block w-7 h-7 rounded bg-primary"
          aria-hidden="true"
        />
        <span class="font-bold text-lg text-primary tracking-wide">TechCorp</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li
          v-for="item in nav"
          :key="item.to"
        >
          <RouterLink
            v-slot="{ href, isActive, navigate }"
            :to="item.to"
          >
            <a
              :href="href"
              class="inline-flex items-center h-10 px-1 border-b-2 transition
                      hover:text-accent"
              :class="isActive ? 'text-primary border-primary' : 'text-text border-transparent'"
              @click="navigate"
            >
              {{ item.label }}
            </a>
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile burger -->
      <button
        class="md:hidden inline-flex flex-col gap-[5px] p-2 rounded border border-border"
        aria-label="切換導覽選單"
        @click="isOpen = !isOpen"
      >
        <span class="block w-6 h-[2px] bg-text" />
        <span class="block w-6 h-[2px] bg-text" />
        <span class="block w-6 h-[2px] bg-text" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-border bg-background"
    >
      <ul class="container py-2 space-y-1">
        <li
          v-for="item in nav"
          :key="item.to"
        >
          <RouterLink
            :to="item.to"
            class="block px-2 py-2 rounded hover:bg-surface"
            @click="isOpen = false"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { isOpen.value = false })

const nav = [
  { label: '關於我們', to: '/about' },
  { label: '產品技術', to: '/tech' },
  { label: '常見問題', to: '/faq' },
  { label: '聯絡我們', to: '/contact' },
]
</script>
