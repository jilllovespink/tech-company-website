<template>
  <section
    class="relative w-full isolate"
    :class="heightClass || 'min-h-[26vh] md:min-h-[30vh]'"
  >
    <!-- 背景圖 -->
    <div
      class="absolute inset-0 bg-center bg-cover"
      :style="{ backgroundImage: `url('${src}')` }"
      aria-hidden="true"
    ></div>

    <!-- 淺色遮罩（左深右淡） -->
    <div
      class="absolute inset-0 bg-black/30 lg:bg-gradient-to-r from-black/40 via-black/20 to-transparent"
    ></div>

    <!-- 內容 -->
    <div class="relative container h-full flex items-center py-8 md:py-10">
      <div class="max-w-3xl">
        <h1 v-if="title" class="text-white text-3xl md:text-4xl font-semibold">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-white/85 mt-2">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <!-- 無障礙描述（背景圖語意） -->
    <span v-if="alt" class="sr-only">{{ alt }}</span>
  </section>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },        // 背景圖網址
  title: { type: String, default: '' },         // 可選頁面標題
  subtitle: { type: String, default: '' },      // 可選副標
  alt: { type: String, default: '' },           // 可選：供螢幕閱讀器描述背景
  heightClass: { type: String, default: '' }    // 可選：覆蓋高度類別
})
</script>
