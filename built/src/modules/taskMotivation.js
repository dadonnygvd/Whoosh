'use strict';
var TaskMotivation = /** @class */ (function () {
    function TaskMotivation(internalization, name, initialValue) {
        this.intrinsicTaskMotivation = initialValue;
        this.taskName = name;
        this.value = initialValue;
        this.internalization = internalization;
        setInterval(this.revertTaskMotivation, 25);
    }
    TaskMotivation.prototype.revertTaskMotivation = function () {
        var difference = this.intrinsicTaskMotivation - this.value;
        var adjustment = difference * 1;
        this.value += adjustment;
    };
    return TaskMotivation;
}());
export { TaskMotivation };
//# sourceMappingURL=taskMotivation.js.map