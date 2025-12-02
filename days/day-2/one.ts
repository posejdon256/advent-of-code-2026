import { splitData } from "./splitter.ts";
import type { IDRange } from "./types.ts";
let sum = 0;
export const one = (data: string): number => {
    const ranges = splitData(data);
    ranges.forEach(range => {
        checkInRange(range);
    });
    return sum;

}

const checkInRange = (range: IDRange): void => {
    const startN = Number(range.start);
    const endN = Number(range.end);
    for(let i = startN; i <= endN; i ++) {
        const numbS = i.toString();
        if(isInvalid(numbS)) {
            sum += i;
        }
    }
}

export const isInvalid = (numbS: string): boolean => {
    if(numbS.length  % 2 !== 0) {
        return false;
    }
    let pLeft = 0;
    let pRitght = numbS.length / 2;
    for(let i = 0; i < numbS.length / 2; i ++) {
        if(numbS[pLeft] !== numbS[pRitght]) {
            return false;
        }
        pLeft ++;
        pRitght ++;
    }
    return true;
}