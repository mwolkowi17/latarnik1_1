import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainCompStore = defineStore("mainComp1", () => {
  //podstawowe sterowanie ekranami gry

  const ifInstruction = ref(false);
  const ifMain1 = ref(true);

  return { ifInstruction, ifMain1 };
});
