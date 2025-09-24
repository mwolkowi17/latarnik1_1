<script setup lang="ts">
import SceneInstruction from './SceneInstruction.vue'
import SceneMain1 from './SceneMain1.vue'
import SceneWinSilver from './SceneWinSilver.vue'
import  {useMainCompStore} from '../stores/mainCompStore'

const store=useMainCompStore()
</script>

<template>
    <main>
        <div>
            <SceneInstruction v-if="store.ifInstruction" />
            <SceneMain1 v-if="store.ifMain1"/>
            <SceneWinSilver v-if="store.ifWinSilver"/>
        </div>
    </main>
</template>

<style scoped></style>