import { splitData } from "./splitter.ts";
let sum = 0;
export const one = (data: string): number => {
    const banks = splitData(data);
    banks.forEach(bank => {
        let first = 0;
        for(let i = first + 1; i < bank.length-1; i ++) {
            if(bank[i] > bank[first]) {
                first = i;
            }
        }
        let second = first + 1;
        for(let i = second + 1; i < bank.length; i ++) {
            if(bank[i] > bank[second]) {
                second = i
            }
        }
        const result = 10 * bank[first] + bank[second];
        sum += result;
    });
    return sum;

}
