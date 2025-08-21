<template>
  <footer class="border-t border-border mt-12">
    <div class="container py-10 grid gap-8 md:grid-cols-2">
      <!-- 公司資訊 -->
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span
            class="inline-block w-6 h-6 rounded bg-primary"
            aria-hidden="true"
          />
          <h3 class="text-lg font-semibold">
            TechCorp 科技股份有限公司
          </h3>
        </div>
        <ul class="space-y-1 text-sm text-muted">
          <li>統一編號：12345678</li>
          <li>地址：台北市信義區市府路 1 號</li>
          <li>電話：02-1234-5678</li>
          <li>Email：contact@techcorp.com</li>
        </ul>
      </div>

      <!-- 快速連結 -->
      <div class="md:justify-self-end">
        <h4 class="text-base font-semibold mb-3">
          快速連結
        </h4>
        <ul class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <li>
            <RouterLink
              to="/about"
              class="hover:text-accent"
            >
              關於我們
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/tech"
              class="hover:text-accent"
            >
              產品技術
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/faq"
              class="hover:text-accent"
            >
              常見問題
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="hover:text-accent"
            >
              聯絡我們
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-border">
      <div
        class="container py-4 text-sm text-muted flex items-center justify-between"
      >
        <span>© {{ new Date().getFullYear() }} TechCorp. All rights reserved.</span>
        <span>Powered by
          <span class="text-primary font-medium">YourName</span></span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 無邏輯
</script>
