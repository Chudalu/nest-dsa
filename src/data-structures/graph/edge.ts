import { Vertex } from "./vertex";

export class Edge {
    startVertex: Vertex;
    endVertex: Vertex;
    weight: number;

    constructor(startVertex: Vertex, endVertex: Vertex, weight = 0) {
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }
}