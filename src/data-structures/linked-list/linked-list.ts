import { Injectable } from '@nestjs/common';
import { LinkedListNode } from './linked-list-node';

@Injectable()
export class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;
    comparator: (a: any, b: any) => number;

    constructor(comparator?: (a: any, b: any) => number) {
        this.head = null;
        this.tail = null;
        this.comparator = comparator || defaultComparator;
    }

    append(value: any): LinkedList {
        let node = new LinkedListNode(value);
        if (!this.head) this.head = node;
        if (this.tail) this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(value: any): LinkedList {
        let node = new LinkedListNode(value, this.head);
        this.head = node;
        if (!this.tail) this.tail = node;
        return this;
    }

    delete(value: any): LinkedListNode {
        if (!this.head) return null;
        let deleted = null;
        while (this.head && this.comparator(this.head.value, value) === 0) {
            deleted = this.head;
            this.head = this.head.next;
        }
        let node = this.head;
        if (node) {
            while (node.next) {
                if (this.comparator(node.next.value, value)===0) {
                    deleted = node.next;
                    node.next = node.next.next;
                }
                else node = node.next;
            }
        }
        if (this.comparator(this.tail.value, value)===0) this.tail = node;
        return deleted;
    }

    deleteTail(): LinkedListNode {
        let deleted = this.tail;
        if (this.head == deleted) {
            this.head = null;
            this.tail = null;
            return deleted;
        }
        let node = this.head;
        while (node.next != this.tail) node = node.next;
        node.next = null;
        this.tail = node;
        return deleted;
    }

    deleteHead(): LinkedListNode {
        if (!this.head) return null;
        let deleted = this.head;
        if (this.head.next) this.head = this.head.next;
        else {
            this.head = null;
            this.tail = null;
        }
        return deleted;
    }

    find({ value = null, callback = null }): LinkedListNode {
        if (!this.head) return null;
        let node = this.head;
        while (node != null) {
            if (callback && callback(node.value)) return node;
            if (this.comparator(node.value, value) === 0) return node;
            node = node.next;
        }
        return null;
    }

    reverse(): LinkedList {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    fromArray(items: any[]) {
        items.forEach(i => this.append(i));
    }

    toArray(): LinkedListNode[] {
        let array = [];
        let node = this.head;
        while (node != null) {
            array.push(node);
            node = node.next;
        }
        return array;
    }

    toString(callback?: (value: any) => string): string {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}

function defaultComparator(a: any, b: any): number {
    if (a === b) return 0;
    return a > b ? 1 : -1;
}