import { Blockades } from '../../src/modules/blockades'

test('over time, new things happen which impact your current blockades',async () => {
    let blockades = new Blockades();
    blockades.currentBlock = 0
    blockades.updateNewBlock();
    expect(blockades.currentBlock).toBeGreaterThan(0);
});
