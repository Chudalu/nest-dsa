import { Injectable } from '@nestjs/common';
import { Vertex } from './vertex';
import { Edge } from './edge';

@Injectable()
export class Graph {
    private directed: boolean;
    private vertices: {};

    constructor(directed: boolean) {
        this.directed = directed;
        this.vertices = {};
    }

    addVertex(vertex: Vertex): Graph {
        this.vertices[vertex.getKey()] = vertex;
        return this;
    }

    addEdge(edge: Edge): Graph {
        if (!this.getVertex(edge.startVertex)) this.addVertex(edge.startVertex);
        if (!this.getVertex(edge.endVertex)) this.addVertex(edge.endVertex);
        if (this.directed) {
            this.getVertex(edge.startVertex).addEdge(edge);
        } else {
            this.getVertex(edge.startVertex).addEdge(edge);
            this.getVertex(edge.endVertex).addEdge(edge);
        }
        return this;
    }

    getVertex(vertex: Vertex): Vertex {
        return this.vertices[vertex.getKey()] || null;
    }

    getVertices(): Vertex[] {
        return Object.keys(this.vertices).map(k => this.vertices[k]);
    }

    getEdges(): Edge[] {
        return [].concat(...this.getVertices().map(v => v.getEdges()));
    }

    getNeighbors(vertex: Vertex): Vertex[] {
        return this.getVertex(vertex).getNeighbors();
    }

    findEdge(start: Vertex, end: Vertex) {
        let vertex = this.getVertex(start);
        if (!vertex) return null;
        return vertex.findEdge(end);
    }

    toString() {
        return Object.keys(this.vertices).toString();
    }
}
