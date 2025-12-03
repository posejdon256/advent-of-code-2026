import { splitData } from "./splitter.ts";
import type { Bank } from "./types.ts";

let sum = 0;
export const two = (data: string): number => {
    const banks = splitData(data);
    banks.forEach(bank => {
        let digitsLeft = 11;
        let start = 0;
        let joltage = 0;
        for(let i = 0; i < 12; i ++) {
            const biggest = findBiggetInRange(bank, start, bank.length - digitsLeft - 1);
            joltage += ((10 ** (digitsLeft)) * bank[biggest]);
            start = biggest + 1; 
            digitsLeft --;
        }
        sum += joltage
    });
    return sum;
}

export const findBiggetInRange = (bank: Bank, start: number, end: number): number => {
    let best = start;
    for(let i = start + 1; i <= end; i ++) {
        if(bank[i] > bank[best]) {
            best = i;
        }
    }
    return best;
}
