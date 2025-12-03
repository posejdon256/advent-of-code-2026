import type { Bank } from './types.ts'
export const splitData = (data: string): Array<Bank> => {
    const arr = data.split('\n');
    const banks: Array<Bank> = []
    arr.forEach(line => {
        const bank = line.split('').map(battery => Number(battery));
        banks.push(bank)
    });
    return banks;
}