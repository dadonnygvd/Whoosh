import { TaskMotivation } from './taskMotivation';
import { Internalization } from './internalization';
import { Blockades } from './blockades';
var MotivationService = /** @class */ (function () {
    function MotivationService() {
        this.internalization = new Internalization();
        this.taskMotivation = new TaskMotivation(this.internalization, 'drawing', 80);
        this.blockades = new Blockades();
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
export { MotivationService };
//# sourceMappingURL=motivationService.js.map