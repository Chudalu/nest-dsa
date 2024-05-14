import { Vertex } from "./vertex";

export class Config {
    enterVertex: (vertex: Vertex) => void;
    leaveVertex: (vertex: Vertex) => void;
    allowEnterVertex?: (vertex: Vertex) => boolean;

    constructor({enterVertex, leaveVertex, allowEnterVertex}) {
        this.enterVertex = enterVertex;
        this.leaveVertex = leaveVertex;
        this.allowEnterVertex = allowEnterVertex;
    }
}