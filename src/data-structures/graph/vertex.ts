import { Edge } from "./edge";

export class Vertex {
    private key: string;
    private edges: Edge[];

    constructor(key: string) {
        this.key = key;
        this.edges = [];
    }

    getKey(): string {
        return this.key;
    }

    addEdge(edge: Edge): Vertex {
        this.edges.push(edge);
        return this;
    }

    findEdge(vertex: Vertex): Edge {
        return this.edges.find(edge => edge.startVertex === vertex || edge.endVertex == vertex);
    }

    getNeighbors(): Vertex[] {
        let edges = this.edges;
        return edges.map((edge) => {return edge.startVertex === this ? edge.endVertex : edge.startVertex });
    }

    getEdges(): Edge[] {
        return this.edges;
    }
}