<template>
    <div class='car' v-bind:style="{ 'top': (car.topPos) + 'px', 'left': (car.leftPos) + 'px', 'transform': 'rotate('+(car.carDirection)+'deg)'}" />
</template>

<script lang='ts'>
import Vue from 'vue';
import { Car } from '../modules/car'

export default Vue.extend({
    data () {
        return {
            
        }
    },
    props: {
        car: {
            type: Car
        }
    },
    mounted () {
        document.addEventListener('keydown', (event) => {
            switch (event.which) {
                case 38:
                    this.car.forward = true
                    break
                case 40:
                    this.car.backward = true
                    break
                case 37:
                    this.car.left = true
                    break
                case 39:
                    this.car.right = true
                    break
                case 32:
                    this.car.break = true
                    break
            }
        })
        document.addEventListener('keyup', (event) => {
            switch (event.which) {
                case 38:
                    this.car.forward = false
                    break
                case 40:
                    this.car.backward = false
                    break
                case 37:
                    this.car.left = false
                    break
                case 39:
                    this.car.right = false
                    break
                case 32:
                    this.car.break = false
                    break
            }
        })
    },
})

</script>