import Vue from "vue";
import Game from "./components/Game.vue";

let v = new Vue({
    el: "#app",
    template: `
        <game />
    `,
    components: {
        Game
    }
});
