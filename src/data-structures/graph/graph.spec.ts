import { Graph } from './graph';
import { Vertex } from './vertex';
import { Edge } from './edge';

describe('Graph', () => {
  it('an empty graph returns valid string', () => {
    const graph = new Graph(false);
    expect(graph.toString()).toBe('');
  });
  
  it('vertices can be added to graph', () => {
    const graph = new Graph(false);
  
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');
  
    graph
        .addVertex(vertexA)
        .addVertex(vertexB);
  
    expect(graph.toString()).toBe('A,B');
  });
  
  it('existing vertex is returned', () => {
    const graph = new Graph(false);
  
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');
  
    graph
        .addVertex(vertexA)
        .addVertex(vertexB);
  
    expect(graph.getVertex(vertexA)).toBe(vertexA);
    expect(graph.getVertex(vertexB)).toBe(vertexB);
  });
  
  it('missing vertex is returned as null', () => {
    const graph = new Graph(false);
  
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');
  
    graph
        .addVertex(vertexA);
  
    expect(graph.getVertex(vertexB)).toBe(null);
  });
});


describe('Vertex', () => {
  it('edges are added, neighbors are valid', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');
    const vertexC = new Vertex('C');
  
    const edgeAB = new Edge(vertexA, vertexB);
    const edgeAC = new Edge(vertexA, vertexC);
  
    vertexA
        .addEdge(edgeAB)
        .addEdge(edgeAC);
  
    expect(vertexA.getNeighbors()).toStrictEqual([vertexB, vertexC]);
  });
});
