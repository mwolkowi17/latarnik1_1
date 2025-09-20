<script setup lang="ts">
import SceneInstruction from './SceneInstruction.vue'
import  {useMainCompStore} from '../stores/mainCompStore'

const store=useMainCompStore()
</script>

<template>
    <main>
        <div>
            <SceneInstruction v-if="store.ifInstruction" />
        </div>
    </main>
</template>

<style></style>