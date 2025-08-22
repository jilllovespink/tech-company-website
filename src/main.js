import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { configure } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";

configure({
  generateMessage: localize({
    zh_TW: {
      messages: {
        ...zh_TW.messages,
        required: "此欄位為必填",
        email: "請輸入有效的電子郵件",
        numeric: "僅能輸入數字",
      },
      // 讓 {field} 顯示中文名稱
      names: {
        fullName: "姓名",
        company: "單位名稱",
        email: "電子郵件",
        phone: "聯絡電話",
        serviceType: "服務類型",
        message: "詳細需求",
        startDate: "預計開始時間",
      },
      //（可選）針對單一欄位覆寫訊息
      fields: {
        fullName: { required: "請輸入您的姓名" },
        phone: { required: "請輸入聯絡電話" },
        message: { required: "請輸入詳細需求" },
      },
    },
  }),
  //（可選）介面互動時就驗證
  validateOnInput: true,
});

setLocale("zh_TW");

createApp(App).use(router).mount("#app");
