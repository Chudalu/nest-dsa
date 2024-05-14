import { Injectable } from '@nestjs/common';

@Injectable()
export class HashTable {
    buckets: Array<Array<any>>;
    keys: {};

    constructor(bucketsLength: number = 32) {
        this.buckets = new Array<Array<any>>(bucketsLength);
        this.keys = {};
    }

    hashFunction(key: string): number {
        return key.split("").map(k => k.charCodeAt(0))
        .reduce((a, b) => a + b, 0) % this.buckets.length;
    }

    has(key: string): boolean {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    set(key: string, value: any) {
        let hash = this.hashFunction(key);
        if (this.has(key)) {
            for (let entry of this.buckets[hash]) {
                if (entry.key === key)
                entry.value = value;
            }
        } else {
            if (!this.buckets[hash]) this.buckets[hash] = [];
            this.buckets[hash].push({ key, value });
        }
        this.keys[key] = hash;
    }

    get(key: string): any {
        let hash = this.hashFunction(key);
        let bucket = this.buckets[hash];
        return bucket?.find(v => v.key === key)?.value;
    }

    delete(key: string) {
        if (!this.has(key)) return null;
        let hash = this.hashFunction(key);
        delete this.keys[key];
        if (!this.buckets[hash]) return null;
        this.buckets[hash] = [...this.buckets[hash].filter(pair => pair.key != key)];
    }

    getKeys(): string[] {
        return Object.keys(this.keys);
    }

    getValues(): any[] {
        return this.buckets.reduce((values, bucket) => {
            let bucketValues = bucket.map(pair => pair.value);
            return values.concat(bucketValues);
        }, []);
    }
}
