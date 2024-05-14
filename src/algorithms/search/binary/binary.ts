import { Injectable } from '@nestjs/common';

@Injectable()
export class Binary {

    constructor() {}

    search(array: number[], query: number, left: number, right: number): number {
        if (!array) return null;
        //search is out of range
        if (left > right) return null;
        let middle = Math.floor((left + right)/2);
        if (array[middle] > query) return this.search(array, query, left, middle-1);
        if (array[middle] < query) return this.search(array, query, middle+1, right);
        return middle;
    }
}
