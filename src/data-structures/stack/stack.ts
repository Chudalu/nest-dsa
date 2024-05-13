import { Injectable } from '@nestjs/common';

@Injectable()
export class Stack {

    data: any[];
    constructor() {
        this.data = [];
    }

    push(value: any): void {
        this.data.push(value);
    }

    pop(): any {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }

    peek(): any {
        if (this.isEmpty()) return null;
        return this.data[this.data.length-1];
    }

    isEmpty(): boolean {
        return this.data.length == 0;
    }

    toString(callback?: (value: any) => string) {
        return this.toArray().map(val => callback ? callback(val) : `${val}`).join(',');
    }

    toArray(): any[] {
        return [...this.data].reverse();
    }


}
