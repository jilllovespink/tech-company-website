<template>
  <section class="container py-12">
    <h1 class="section-title">
      產品列表
    </h1>
    <p class="section-subtle mt-2">
      代表性產品與特色
    </p>

    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <article
        v-for="p in products"
        :key="p.id"
        class="card p-5"
      >
        <h3 class="font-semibold">
          {{ p.name }}
        </h3>
        <p class="text-sm text-muted mt-1">
          {{ p.desc }}
        </p>
        <RouterLink
          to="/tech"
          class="inline-block mt-3 text-accent"
        >
          瞭解更多 →
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup>
const products = [
  { id: 'a', name: '產品 A', desc: '企業級監控平台' },
  { id: 'b', name: '產品 B', desc: '高速資料匯流排' },
  { id: 'c', name: '產品 C', desc: '智慧邊緣運算模組' },
]
</script>
