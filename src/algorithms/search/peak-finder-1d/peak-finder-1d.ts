import { Injectable } from '@nestjs/common';

@Injectable()
export class PeakFinder1d {
    constructor() {}

    find(array: number[]): number {
        if (!array || array.length == 0) return null;
        if (array.length == 1) return array[0];
        if (array[0]>=array[1]) return array[0];
        let length = array.length;
        if (array[length-1] > - array[length-2]) return array[length-1];
        let middle = Math.floor(length/2);
        let left = middle - 1;
        let right = middle + 1;
        if (array[middle]>=array[left] && array[middle]>=array[right]) return array[middle];
        if (array[middle] < array[left]) return this.find(array.slice(0,right));
        if (array[middle] < array[right]) return this.find(array.slice(middle, length));
        return null;
    }
}
