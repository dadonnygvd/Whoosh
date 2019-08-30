import { MotivationService } from '../../src/modules/motivationService'
import { TaskMotivation } from '../../src/modules/taskMotivation'

let motivationService = new MotivationService();

beforeEach(() => {
    motivationService.idleTime = 100;
    motivationService.activeTask.internalization = 1
});

describe('internalization is changed when triggered', () => {
    test('external motivation pulls to (0)', () => {
        motivationService.triggerExternal(100)
        expect(motivationService.activeTask.internalization).toBeCloseTo(0);
    });

    test('introjected motivation pulls to (0.2)', () => {
        motivationService.triggerIntrojected(100)
        expect(motivationService.activeTask.internalization).toBeCloseTo(0.2);
    });

    test('identified motivation pulls to (0.5)', () => {
        motivationService.triggerIdentified(100)
        expect(motivationService.activeTask.internalization).toBeCloseTo(0.5);
    });

    test('integrated motivation pulls to (0.8)', () => {
        motivationService.triggerIntegrated(100)
        expect(motivationService.activeTask.internalization).toBeCloseTo(0.8);
    });

    test('intrinsic motivation pulls to (1)', () => {
        motivationService.triggerIntrinsic(100)
        expect(motivationService.activeTask.internalization).toBeCloseTo(1);
    });
})

describe('motivation strength is boosted with triggers', () => {
    beforeEach(() => {
        motivationService.motivationStrength.value = 0
    });

    test('external motivation when fully charged can completely fill your strength', () => {
        motivationService.triggerExternal(100)
        expect(motivationService.motivationStrength.value).toBeCloseTo(100);
    });

    test('introjected motivation has great effect on your strength', () => {
        motivationService.triggerIntrojected(100)
        expect(motivationService.motivationStrength.value).toBeCloseTo(60);
    });

    test('identified motivation has a bit effect on your strength', () => {
        motivationService.triggerIdentified(100)
        expect(motivationService.motivationStrength.value).toBeCloseTo(20);
    });

    test('integrated motivation has no effect on your strength', () => {
        motivationService.triggerIntegrated(100)
        expect(motivationService.motivationStrength.value).toBeCloseTo(0);
    });

    test('intrinsic motivation has no effect on your strength', () => {
        motivationService.triggerIntrinsic(100)
        expect(motivationService.motivationStrength.value).toBeCloseTo(0);
    });
})

test('internalization is slowly replenished over time while your not being triggered', () => {
    motivationService.activeTask.internalization = 0
    motivationService.resetIdle()
    Array.from(Array(300)).forEach((x, i) => {
        motivationService.idling()
    });
    expect(motivationService.activeTask.internalization).toBeGreaterThan(0);
});

describe('trigger power', () => {
    test.each`
        strength  | internalization   
        ${100}    | ${0} 
        ${0}      | ${1}
        ${50}    | ${0.5} 
    `('the strength of the trigger impact the effect on your internalization', ({strength, internalization}) => {
        motivationService.triggerExternal(strength)
        expect(motivationService.activeTask.internalization).toBe(internalization);
    });

    test.each`
        initial | strength  | expectedStrength   
        ${0}    | ${100}    | ${100} 
        ${80}   | ${0}      | ${80}
        ${0}    | ${50}    | ${50} 
        ${80}   | ${100}    | ${100} 
    `('the strength of the trigger impact the effect on your motivation strength', ({initial, strength, expectedStrength}) => {
        motivationService.motivationStrength.value = initial
        motivationService.triggerExternal(strength)
        expect(motivationService.motivationStrength.value).toBe(expectedStrength);
    });
});

describe('resting', () => {
    test.each`
        idle      | internalization   
        ${100}    | ${0} 
        ${0}      | ${1} 
    `('the longer you rest the greater the impact on your internalization', ({idle, internalization}) => {
        motivationService.idleTime = idle
        motivationService.triggerExternal(100)
        expect(motivationService.activeTask.internalization).toBe(internalization);
    });

    test.each`
        initial | idle      | strength   
        ${80}   | ${100}    | ${100} 
        ${80}   | ${0}      | ${80} 
    `('the longer you rest the greater the impact on your motivation strength', ({initial, idle, strength}) => {
        motivationService.motivationStrength.value = initial
        motivationService.idleTime = idle
        motivationService.triggerExternal(100)
        expect(motivationService.motivationStrength.value).toBe(strength);
    });
});

describe('being motivated', () => {
    test.each`
        strength  | blockades | motivated   
        ${80}     | ${70}     | ${true} 
        ${70}     | ${80}     | ${false}
    `('if your motivation strength exceeds your blockades, you are motivated for that task', ({strength, blockades, motivated}) => {
        motivationService.blockades.currentBlock = blockades
        motivationService.motivationStrength.value = strength
        expect(motivationService.isMotivated()).toBe(motivated);
    });
});

describe('task switching', () => {
    test('should not directly influence your generic motivation strength', () => {
        motivationService.motivationStrength.value = 80
        motivationService.switchTask(new TaskMotivation('something', 0))
        expect(motivationService.motivationStrength.value).toBe(80);
    });

    test('should influence your generic motivation strength over time', () => {
        motivationService.motivationStrength.value = 80
        motivationService.switchTask(new TaskMotivation('something', 0),)
        
        motivationService.motivationStrength.revertMotivationStrength()
        expect(motivationService.motivationStrength.value).toBeLessThan(80);
    });
});