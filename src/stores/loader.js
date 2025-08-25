import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    count: 0, // 支援多個 show/hide 疊加
    startedAt: 0, // 本次顯示起始時間
    minHoldMs: 300, // 最短顯示時間（預設 0.3s）
  }),
  getters: {
    visible: (s) => s.count > 0,
  },
  actions: {
    /** 顯示；可傳入自訂最短時間（毫秒） */
    show(ms) {
      if (this.count === 0) {
        this.startedAt = performance.now();
        this.minHoldMs = typeof ms === "number" ? ms : 300;
      } else if (typeof ms === "number" && ms > this.minHoldMs) {
        // 若已顯示且傳入更長的 hold，延長本次 hold
        this.minHoldMs = ms;
      }
      this.count++;
      // （可選）鎖住滾動
      document.documentElement.classList.add("overflow-hidden");
    },

    /** 隱藏；確保滿足 minHold 才真正關閉 */
    hide() {
      if (this.count <= 0) return;

      // 若還有其他 show 疊加，只是遞減
      if (this.count > 1) {
        this.count--;
        return;
      }

      const elapsed = performance.now() - this.startedAt;
      const remaining = Math.max(0, this.minHoldMs - elapsed);

      const finalize = () => {
        this.count = 0;
        document.documentElement.classList.remove("overflow-hidden");
      };

      if (remaining > 0) {
        // 再等一下，讓動畫跑滿 0.3s
        setTimeout(finalize, remaining);
      } else {
        finalize();
      }
    },

    /** 便利方法：包住任一 Promise 或 async 函式 */
    async wrap(job, ms = 300) {
      this.show(ms);
      try {
        return typeof job === "function" ? await job() : await job;
      } finally {
        this.hide();
      }
    },
  },
});
