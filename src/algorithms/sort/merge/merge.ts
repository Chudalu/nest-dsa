import { Injectable } from '@nestjs/common';

@Injectable()
export class Merge {
    constructor() {
        
    }

    sort(array: number[]): number[] {
        if (!array) return null;
        if (array.length <= 1) return array;
        let left = array.slice(0, array.length/2);
        let right = array.slice(array.length/2, array.length);
        return this.merge(this.sort(left), this.sort(right));
    }

    merge(left: number[], right: number[]): number[] {
        let result = [];
        let l = 0;
        let r = 0;
        while (l < left.length && r < right.length) {
            if (left[l] <= right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }
        while (r < right.length) {
            result.push(right[r]);
            r++;
        }
        while(l < left.length) {
            result.push(left[l]);
            l++;
        }
        return result;
    }
}
