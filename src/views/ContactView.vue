<template>
  <section class="w-full py-0 -mb-12">
    <div
      class="grid md:grid-cols-3 gap-8 items-stretch min-h-[calc(100vh-64px)]"
    >
      <!-- 左：直式圖片（1/3） -->
      <div class="md:col-span-1">
        <div
          class="relative h-full overflow-hidden bg-center bg-cover"
          :style="{
            backgroundImage: `url('${leftImg}')`
          }"
        >
          <!-- 灰色遮罩（可調透明度 20~35） -->
          <div class="absolute inset-0 bg-black/25"></div>
        </div>
      </div>

      <!-- 右：聯絡我們表單（2/3） -->
      <div class="md:col-span-2 px-6 md:px-10 pb-8">
        <ContactForm bare @submit="handleSubmit" />
        <div
          class="mt-8 bg-surface border-l-8 px-5 py-4"
          style="border-color: var(--color-primary);"
        >
          <p class="text-text leading-relaxed">
            如需親臨本公司洽談，請於來訪前撥打
            <a href="tel:07-1234567" class="underline">07-1234567</a>
            聯繫，以便安排專人接待。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'

const leftImg =
  'https://firebasestorage.googleapis.com/v0/b/course-platform-3fe65.firebasestorage.app/o/bornw%2FFirefly_%E4%B8%80%E4%BD%8D%E4%BA%9E%E6%B4%B2%E8%87%89%E5%AD%94%E7%9A%84%E5%A5%B3%E6%80%A7%E5%AE%A2%E6%9C%8D%E4%BA%BA%E5%93%A1%E5%9D%90%E5%9C%A8%E8%BE%A6%E5%85%AC%E6%A1%8C%E5%89%8D%20%E8%A6%AA%E5%88%87%E5%9C%B0%E8%AC%9B%E9%9B%BB%E8%A9%B1%E6%9C%8D%E5%8B%99%E5%AE%A2%E4%BA%BA%20%E7%9C%9F%E4%BA%BA%E7%85%A7%E7%89%87%20%E4%BA%BA%E5%93%A1%E7%A9%BF%E8%91%97%E8%97%8D%E8%89%B2%E7%B3%BB%E8%A1%A3%E6%9C%8D%20%E7%9B%B4%E5%BC%8F%20746621.jpg?alt=media&token=45e798d5-5039-41d3-b3f8'
</script>
