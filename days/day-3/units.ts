import { exampleData } from "./data.ts";
import { splitData } from "./splitter.ts";
import { findBiggetInRange } from "./two.ts";

export const units = (...methods: Parameters<(...args: any) => any>): boolean => {
    let areOk = true;
    areOk = areOk && splitUnit();
    areOk = areOk && bestInRangeUnit();
    return areOk;
}


const splitUnit = () => {
    const result = splitData(exampleData);
    if(result[0][0] === 9 && result[0][result[0].length - 1] === 1) {
        return true;
    }
    return false;
}

const bestInRangeUnit = (): boolean => {
    const result = findBiggetInRange([1, 2, 3, 4, 5, 6, 8, 3, 5], 2, 7);
    if(result === 6) {
        return true;
    }
    return false;
}