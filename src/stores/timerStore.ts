import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimerStore = defineStore("timerStore", () => {
  const ifTimerVisible = ref(true);

  const ifTimeFirstTime = ref(true);

  const timeScene1Local = ref(11);

  const ifTimerOn = ref(true);

  const formatedTime1 = ref("00:00");

  return {
    ifTimerVisible,
    ifTimeFirstTime,
    timeScene1Local,
    ifTimerOn,
    formatedTime1,
  };
});
