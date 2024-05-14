import { Injectable } from '@nestjs/common';

@Injectable()
export class Heap {
    constructor() {
        
    }

    sort(array: number[]): number[] {
        if (!array) return null;
        if (array.length <= 1) return array;
        this.buildMaxHeap(array);
        let n = array.length;
        for (let i = n-1; i>0; i--) {
            this.swap(array, i, 0);
            this.heapify(array, i, 0);            
        }
        return array;
    }

    buildMaxHeap(array: number[]): number[] {
        if (!array) return null;
        if (array.length <= 1) return array;
        let n = array.length;
        for (let i = Math.floor(n/2)-1; i>=0; i--) {
            this.heapify(array, n, i);
        }
    }

    heapify(array: number[], n: number, i: number): number[] {
        if (!array) return null;
        if (array.length <= 1) return array;
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2;
        if (left < n && array[left] > array[largest]) largest = left;
        if (right < n && array[right] > array[largest]) largest = right;
        //if largest is not root
        if (i != largest) {
            this.swap(array, i, largest);
            this.heapify(array, n, largest);
        }
        return array;
    }

    //swap two elements in array
    swap(array: number[], i: number, j: number): void {
        array[i] = array[i] ^ array[j];
        array[j] = array[i] ^ array[j];
        array[i] = array[i] ^ array[j];
    }
}
