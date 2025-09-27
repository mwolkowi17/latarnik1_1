import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimerStore = defineStore("timerStore", () => {
  const ifTimerVisible = ref(true);

  const ifTimeFirstTime = ref(true);

  const timeScene1Local = ref(11);

  const ifTimerOn = ref(true);

  return { ifTimerVisible, ifTimeFirstTime, timeScene1Local, ifTimerOn };
});
