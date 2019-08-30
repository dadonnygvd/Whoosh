"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var MotivationGame_vue_1 = __importDefault(require("./components/MotivationGame.vue"));
var v = new vue_1.default({
    el: "#app",
    template: "\n    <div>\n        <motivation-game />\n        </div>\n    ",
    components: {
        MotivationGame: MotivationGame_vue_1.default
    }
});
//# sourceMappingURL=index.js.map