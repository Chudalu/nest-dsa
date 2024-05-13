import { Injectable } from '@nestjs/common';

@Injectable()
export class Queue<T> {
    list: T[];

    constructor() {
        this.list = [];
    }

    enqueue(item: T): Queue<T> {
        this.list = [...this.list, item];
        return this;
    }

    dequeue(): T {
        let item = this.list[0];
        this.list = this.list.slice(1);
        return item;
    }

    isEmpty(): boolean {
        return this.list.length == 0;
    }

    getLength() {
        return this.list.length;
    }

    toString() {
        return this.list.toString();
    }

}
