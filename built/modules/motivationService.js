"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskMotivation_1 = require("./taskMotivation");
var internalization_1 = require("./internalization");
var blockades_1 = require("./blockades");
var MotivationService = /** @class */ (function () {
    function MotivationService() {
        this.internalization = new internalization_1.Internalization();
        this.taskMotivation = new taskMotivation_1.TaskMotivation(this.internalization, 'drawing', 80);
        this.blockades = new blockades_1.Blockades();
        this.score = 0;
    }
    MotivationService.prototype.triggerExternal = function (strength) {
        this.internalization.value = 0;
    };
    MotivationService.prototype.triggerIntrojected = function (strength) {
        this.internalization.value = 0.2;
    };
    MotivationService.prototype.triggerIdentified = function (strength) {
        this.internalization.value = 0.5;
    };
    MotivationService.prototype.triggerIntegrated = function (strength) {
        this.internalization.value = 0.8;
    };
    MotivationService.prototype.triggerIntrinsic = function () {
        this.internalization.value = 1;
    };
    return MotivationService;
}());
exports.MotivationService = MotivationService;
//# sourceMappingURL=motivationService.js.map