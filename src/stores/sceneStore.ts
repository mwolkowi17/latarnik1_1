import { defineStore } from "pinia";
import { ref } from "vue";

export const useSceneStore = defineStore("storeScene1", () => {
  //sterowanie komponentami głównej sceny
  const ifPodpowiedz = ref(false);
  const ifPrawidlowaOdpowiedz = ref(false);

  return { ifPodpowiedz, ifPrawidlowaOdpowiedz };
});
