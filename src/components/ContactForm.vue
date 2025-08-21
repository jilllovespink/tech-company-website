<template>
  <section class="container py-12">
    <h1 class="text-4xl md:text-5xl font-semibold">
      立即<span class="text-primary">聯絡我們</span>
    </h1>
    <br />
    <p>
      柏恩科技專注於客製自動化設備，無論是標準型材還是複雜結構，都能精準滿足您的需求。如果想了解服務內容、異業合作洽詢，或其他需求，歡迎與我們聯繫！
    </p>

    <!-- 表單 -->
    <Form
      class="mt-8 flex flex-col gap-6 min-h-[560px]"
      :validation-schema="schema"
      @submit="onSubmit"
      v-slot="{ isSubmitting }"
    >
      <!-- 上排兩欄 -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- 姓名 * -->
        <div>
          <label class="block mb-2"
            >姓名 <span class="text-primary">*</span></label
          >
          <Field
            name="fullName"
            as="input"
            type="text"
            class="input"
            placeholder="請輸入您的姓名"
          />
          <ErrorMessage
            name="fullName"
            class="text-red-600 text-sm mt-1 block"
          />
        </div>

        <!-- 公司名稱（選填） -->
        <div>
          <label class="block mb-2">公司名稱</label>
          <Field
            name="company"
            as="input"
            type="text"
            class="input"
            placeholder="請輸入公司名稱"
          />
          <ErrorMessage
            name="company"
            class="text-red-600 text-sm mt-1 block"
          />
        </div>

        <!-- 電子郵件 * -->
        <div>
          <label class="block mb-2"
            >電子郵件 <span class="text-primary">*</span></label
          >
          <Field
            name="email"
            as="input"
            type="email"
            class="input"
            placeholder="example@company.com"
          />
          <ErrorMessage name="email" class="text-red-600 text-sm mt-1 block" />
        </div>

        <!-- 連絡電話（只能輸入數字；可留空） -->
        <div>
          <label class="block mb-2">聯絡電話</label>
          <Field
            name="phone"
            as="input"
            type="text"
            inputmode="numeric"
            pattern="\\d*"
            class="input"
            placeholder="09xx-xxx-xxx"
            @input="digitsOnly"
          />
          <ErrorMessage name="phone" class="text-red-600 text-sm mt-1 block" />
        </div>
      </div>

      <!-- 服務類型（選填） -->
      <div>
        <label class="block mb-2">服務類型</label>
        <Field name="serviceType" as="select" class="input">
          <option value="" disabled selected>請選擇您感興趣的服務</option>
          <option value="consulting">顧問諮詢</option>
          <option value="implementation">系統導入</option>
          <option value="custom-dev">客製開發</option>
          <option value="managed">維運服務</option>
        </Field>
        <ErrorMessage
          name="serviceType"
          class="text-red-600 text-sm mt-1 block"
        />
      </div>

      <!-- 詳細需求 * -->
      <div>
        <label class="block mb-2"
          >詳細需求 <span class="text-primary">*</span></label
        >
        <Field
          name="message"
          as="textarea"
          class="input h-16"
          placeholder="請詳細描述您的需求、目前面臨的挑戰或希望改善的業務流程…"
        />
        <ErrorMessage name="message" class="text-red-600 text-sm mt-1 block" />
      </div>

      <!-- 送出 -->
      <div class="self-end mt-4">
        <button type="submit" class="btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? '送出中…' : '確認送出' }}
        </button>
      </div>

      <!-- 註記 -->
      <p class="text-center text-sm text-muted">
        * 必填欄位。我們將於收到表單後盡速回覆您。
      </p>
    </Form>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, numeric } from '@vee-validate/rules'
import { computed } from 'vue'

// 註冊規則
defineRule('required', required)
defineRule('email', email)
// phone：允許空值；若有輸入則必須為數字
defineRule('numeric', numeric)

// 驗證規則（Yup 不是必須，這裡用物件描述）
const schema = computed(() => ({
  fullName: 'required',
  company: 'required',
  email: 'required|email',
  phone: 'numeric',         // 可留空；若有輸入則須為數字
  serviceType: '',
  message: 'required|min:1',
  startDate: ''
}))

// 僅允許數字的輸入行為（即時清理）
function digitsOnly(e) {
  const cleaned = (e.target.value || '').replace(/\D+/g, '')
  if (cleaned !== e.target.value) e.target.value = cleaned
}

// 送出：把值拋給父層，之後你在 ContactView 接到後打 API
const emit = defineEmits(['submit'])
async function onSubmit(values, { resetForm }) {
  // 你之後可以改成：
  // await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(values) })
  emit('submit', values)
  resetForm()
}
</script>
