<template>
  <main class="min-h-[70vh] flex items-center">
    <section class="container mx-auto px-4 md:px-8 text-center">
      <!-- 大大的 404 -->
      <p
        class="text-[96px] md:text-[128px] font-extrabold text-gray-200 leading-none select-none"
      >
        404
      </p>

      <!-- 細線 -->
      <div class="h-1 w-24 md:w-40 bg-primary mx-auto my-6 rounded-full"></div>

      <!-- 標題與說明 -->
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
        此頁面不存在
      </h1>
      <p class="text-text mt-3 max-w-2xl mx-auto">
        很抱歉，我們找不到您要找的頁面。該頁面可能已被移動、刪除，或者您輸入了錯誤的網址。
      </p>

      <!-- 按鈕 -->
      <div class="mt-8 flex items-center justify-center gap-3">
        <router-link to="/" class="btn-primary"> 返回首頁 </router-link>

        <router-link to="/about" class="btn-secondary"> 關於柏恩 </router-link>
      </div>
    </section>
  </main>
</template>
