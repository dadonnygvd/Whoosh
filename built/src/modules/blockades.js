'use strict';
// var json = require('../texts/blocks.json');
var Blockades = /** @class */ (function () {
    // potentialBlocks:any
    function Blockades() {
        this.currentBlock = 1;
        // this.potentialBlocks = json
        setTimeout(this.updateNewBlock(), this.newTimeout());
    }
    Blockades.prototype.setBlock = function (value) {
        this.currentBlock = value;
    };
    Blockades.prototype.updateNewBlock = function () {
        // let i = Math.floor(Math.random() * this.potentialBlocks.length)
        // console.log('test: ' + this.potentialBlocks[i].text)
        // this.currentBlock = this.potentialBlocks[i].value
        setTimeout(this.updateNewBlock, this.newTimeout());
    };
    Blockades.prototype.newTimeout = function () {
        return Math.floor(Math.random() * 3000) + 10000;
    };
    return Blockades;
}());
export { Blockades };
//# sourceMappingURL=blockades.js.map