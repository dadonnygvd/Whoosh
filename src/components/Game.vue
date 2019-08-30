<template>
    <div class='box'>
        <car :car="engine.car"></car>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Engine } from '../modules/engine'
import Car from './Car.vue'

export default Vue.extend({
    data() {
        return {
            engine: new Engine()
        }
    },
    components: {
        'car': Car
    },
    mounted () {
        this.engine.play()
    }
});
</script>

<style lang="css">
@import '../assets/style.css';
</style>
