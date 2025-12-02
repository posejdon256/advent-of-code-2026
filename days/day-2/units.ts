import { exampleData } from "./data.ts";
import { isInvalid } from "./one.ts";
import { isItPattern } from "./two.ts";
import type { IDRange } from "./types.ts";

export const units = (...methods: Parameters<(...args: any) => any>): boolean => {
    let areOk = true;
    areOk = splitDataTest(methods[0]) && areOk;
    areOk = checkIsInvalid() && areOk;
    areOk = checkIsPattern() && areOk;
    return areOk;
}

const splitDataTest = (splitData:(arr: string) => Array<IDRange>): boolean => {
   const result = splitData(exampleData);
   if(result[0].start === '11' && result[0].end === '22') {
    return true;
   }
   return false;
}

const checkIsInvalid = (): boolean => {
    const invalid1 = isInvalid('123123');
    if(!invalid1) {
        console.log('123123 should be invalid');
    }
    const invalid2 = isInvalid('101');
    if(invalid2) {
        console.log('101 should be valid')
    }
    const invalid3 = isInvalid('1')
    if(invalid3) {
        console.log('1 should be valid')
    }
    return invalid1 && !invalid2 && !invalid3;
}

const checkIsPattern = (): boolean => {
    const isPattern1 = isItPattern('123123123', '123');
    if(!isPattern1) {
       console.log('123 should be pattern for 123123123');
    }
    const isPattern2 = isItPattern('1111111', '1');
    if(!isPattern2) {
        console.log('1 should be pattern for 1111111');
    }
    const isPattern3 = isItPattern('12341231', '123');
    if(isPattern3) {
        console.log('123 should NOT be pattern for 12341231')
    }
    return isPattern1 && isPattern2 && !isPattern3;
}