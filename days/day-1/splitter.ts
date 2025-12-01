import type { Rotation } from "./types.ts";

export const splitData = (data: string): Array<Rotation> => {
    const arr = data.split('\n');
    const rotations = arr.map(elem =>  {
        const rotation: Rotation = {direction: 'LEFT', steps: 0}
        if(elem[0] === 'R') {
            rotation.direction = 'RIGHT';
        }
        rotation.steps = Number(elem.slice(1, elem.length))
        return rotation;
    })
    return rotations;
}