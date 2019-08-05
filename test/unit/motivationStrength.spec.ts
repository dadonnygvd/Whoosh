import { TaskMotivation } from '../../src/modules/taskMotivation'
import { Blockades } from '../../src/modules/blockades'
import { MotivationStrength } from '../../src/modules/motivationStrength'

test('to make it more interesting, your motivation strength now starts below your current blockade',async () => {
    let taskMotivation = new TaskMotivation('drawing', 80)
    let blockades = new Blockades()
    let motivationStrength = new MotivationStrength(taskMotivation, blockades)
    expect(motivationStrength.value).toBeLessThan(blockades.currentBlock);
});

test('over time your motivation strength will return to your task motivation',async () => {
    let taskMotivation = new TaskMotivation('drawing', 80)
    let blockades = new Blockades()
    let motivationStrength = new MotivationStrength(taskMotivation, blockades)
    motivationStrength.value = 30
    motivationStrength.revertMotivationStrength()
    expect(motivationStrength.value).toBeGreaterThan(30);
});

test('your motivation strength will only return if you are currently motivated',async () => {
    let taskMotivation = new TaskMotivation('drawing', 80)
    let blockades = new Blockades()
    blockades.currentBlock = 40
    let motivationStrength = new MotivationStrength(taskMotivation, blockades)
    motivationStrength.value = 1
    motivationStrength.revertMotivationStrength()
    expect(motivationStrength.value).toBe(1);
});