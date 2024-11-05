<template>
    <Particles
        id="particlesLoginPage"
        :options="options"
        :particlesInit="particlesInit"
    />
</template>
<script setup lang="ts">
import type {Engine} from "tsparticles-engine";
import {loadSlim} from 'tsparticles-slim'
import particlesJSON from '@/assets/particles.json'
import {ref} from "vue";

const  options = ref(particlesJSON)

const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
}
console.log()

</script>
