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
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
