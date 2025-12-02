import { splitData } from "./splitter.ts";
import type { IDRange } from "./types.ts";
let sum = 0;
export const two = (data: string): number => {
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
    for(let i = 1; i < numbS.length; i ++) {
        if(numbS[i] === numbS[0]) {
            const substr = numbS.substring(0, i);
            if(numbS.length % substr.length === 0 && isItPattern(numbS, substr)) {
                return true;
            }
        }
    }
    return false;
}

export const isItPattern = (word: string, pattern: string): boolean => {
    for(let i = 0; i < word.length;) {
        for(let j = 0; j < pattern.length; j ++) {
            if(pattern[j] !== word[i + j]) {
                return false;
            }
        }
        i += pattern.length;
    }
    return true;
}