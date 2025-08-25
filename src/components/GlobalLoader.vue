<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-200"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[9999] bg-black/55 backdrop-blur-sm flex items-center justify-center"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div class="relative select-none">
        <!-- Logo：左→右顯影 -->
        <img
          :src="logo"
          :alt="alt"
          class="h-16 md:h-24 lg:h-28 animate-reveal"
          draggable="false"
        />
        <!-- 掃描亮線（視覺加分） -->
        <span
          class="pointer-events-none absolute inset-y-0 w-14 md:w-16 animate-scanner
                 [background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)]
                 mix-blend-screen"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  logo: {
    type: String,
    default:
      'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FLOGO1.png?alt=media&token=748ce257-568c-4c07-aaa2-1680954c211c'
  },
  alt: { type: String, default: 'Borne Technology Loading' }
})
</script>
