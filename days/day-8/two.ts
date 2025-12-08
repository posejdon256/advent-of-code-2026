import { addNewPath, bfs, dinstance, getClosestPaths } from "./helpers.ts";
import { splitData } from "./splitter.ts";
import type { Distance } from "./types.ts";

export const two = (data: string): number => {
 const points = splitData(data);
    const distances = new Array<Array<number>>(points.length);
    for(let i = 0; i <points.length; i ++) {
        distances[i] = new Array<number>(points.length);
        for(let j = i + 1; j < points.length; j ++) {
            distances[i][j] = dinstance(points[i], points[j]);
        }
    }
    const graph = new Map<number, Array<number>>();
    const sortedDistances = new Array<Distance>();
    while(true) {
        const visited = new Map<number, boolean>();
        const edge = addNewPath(sortedDistances, distances, points)

         const {p1, p2} = edge;

        if(!graph.get(p1.id)) {
            graph.set(p1.id, []);
        }
        if(!graph.get(p2.id)) {
            graph.set(p2.id, []);
        }
        graph.get(p1.id)!.push(p2.id);
        graph.get(p2.id)!.push(p1.id);
        const depth = bfs(graph, edge.p1.id, visited);
        if(depth === points.length) {
            return p1.x * p2.x
        }
    }
}