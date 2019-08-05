import { expect } from 'chai';
import { When, Then } from 'cucumber';
import { Internalization } from '../../../src/modules/internalization';
import { TaskMotivation } from '../../../src/modules/taskMotivation';
When('I like to {string}', function (task) {
    var internalization = new Internalization();
    this.taskMotivation = new TaskMotivation(internalization, task, 80);
});
Then('I have an intrinsic drive to draw', function () {
    expect(this.taskMotivation.intrinsicTaskMotivation).to.be.equal(80);
});
//# sourceMappingURL=taskmotivation.steps.js.map