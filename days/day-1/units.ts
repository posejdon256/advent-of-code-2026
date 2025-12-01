import { exampleData } from "./data.ts";
import type { Rotation } from "./types.ts";

export const units = (...methods: Parameters<(...args: any) => any>): boolean => {
    let areOK = true;
    areOK = areOK && testSplitData(methods[2]);
    areOK = areOK && testOne(methods[0]);
    return areOK;
}

const testSplitData = (splitData: (...args: any) => any): boolean => {
    const result: Array<Rotation> = splitData(exampleData)
    if(result.length ===10) {
        return true;
    }
                console.log('UNIT FAILED "', splitData.name, '"', result, 'NOT EQUAL', true);
    return false;
}

const testOne = (one: any): boolean => {
    const result: number = one(exampleData);
    console.log(result)
    return result === 3;
}