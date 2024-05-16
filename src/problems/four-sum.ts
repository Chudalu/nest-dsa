export class FourSum {

    allPairs = {};
    quads = [];
    constructor() {
        
    }

    fourNumberSum(array: number[], targetSum: number) {
        for (let i = 1; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                let currentSum = array[i] + array[j];
                let diff = targetSum - currentSum;
                if (diff in this.allPairs) {
                    for (let pair of this.allPairs[diff]) {
                        this.quads.push(pair.concat([array[i], array[j]]));
                    }
                }
            }
            for (let k = 0; k < i; k++) {
                let currentSum = array[i] + array[k];
                if (!(currentSum in this.allPairs)) {
                    this.allPairs[currentSum] = [[array[k], array[i]]];
                }
                else {
                    this.allPairs[currentSum].push([array[k], array[i]]);
                }
            }
        }
        return this.quads;
    }
}