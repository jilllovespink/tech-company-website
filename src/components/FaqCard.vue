<template>
  <div
    class="gruop rounded-xl border border-border bg-surface transition-colors duration-200
           hover:bg-gray-600/20 hover:[background:color-mix(in_srgb,var(--color-surface)_95%,black_5%)]"
  >
    <!-- 問題列 -->
    <button
      type="button"
      class="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      :aria-expanded="open"
      :aria-controls="contentId"
      @click="open = !open"
    >
      <span
        class="font-semibold text-text text-base md:text-lg"
        >{{ question }}</span
      >
      <!-- chevron -->
      <svg
        class="h-4 w-4 md:h-5 md:w-5 shrink-0 transition-transform duration-200"
        :class="open ? 'rotate-180' : 'rotate-0'"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- 內容：純 Tailwind slide-down 動畫 -->
    <div
      :id="contentId"
      class="grid transition-all duration-300 ease-out"
      :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div
        class="overflow-hidden px-4 md:px-5 pb-3 md:pb-4 text-muted text-sm md:text-base leading-relaxed"
      >
        <slot>{{ answer }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: String, required: true },
  answer: { type: String, default: '' },
  defaultOpen: { type: Boolean, default: false },
  id: { type: String, default: '' }, // 可選：自帶 id
})

const open = ref(props.defaultOpen)
const contentId =
  props.id || `faq-${Math.random().toString(36).slice(2, 8)}-panel`
</script>
