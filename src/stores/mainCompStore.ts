import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainCompStore = defineStore("mainComp1", () => {
  //podstawowe sterowanie ekranami gry

  const ifInstruction = ref(false);
  const ifMain1 = ref(false);
  const ifWinSilver = ref(false);
  const ifWinGold = ref(false);
  const ifPrzegranaSilver = ref(false);
  const ifPrzegranaGold = ref(true);

  return {
    ifInstruction,
    ifMain1,
    ifWinSilver,
    ifWinGold,
    ifPrzegranaSilver,
    ifPrzegranaGold,
  };
});
