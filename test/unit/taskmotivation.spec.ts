import { TaskMotivation } from '../../src/modules/taskMotivation'

test('task motivation should have an intrinsic motivation related to the task',async () => {
    let taskMotivation = new TaskMotivation('drawing', 80);
    expect(taskMotivation.intrinsicTaskMotivation).toBe(80);
});

test.each`
    intrinsicTM | internalization   | expectedTM
    ${80}       | ${1}              | ${80}
    ${80}       | ${0}              | ${0}
    ${80}       | ${0.5}            | ${40}
`('task motivation is based on the intrinsic task motivation and internalization', ({intrinsicTM, internalization, expectedTM}) => {
    let taskMotivation = new TaskMotivation('drawing', intrinsicTM);
    taskMotivation.pullInternalizationTo(internalization, 100)
    expect(taskMotivation.value).toBe(expectedTM);
});