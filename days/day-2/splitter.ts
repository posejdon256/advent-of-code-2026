import type { IDRange } from './types.ts'

export const splitData = (data: string): Array<IDRange> => {
    const arr = data.split(',');
    const ranges = arr.map(elem =>  {
        const rangeArr = elem.split('-');
        return {
            start: rangeArr[0],
            end: rangeArr[1]
        } as unknown as IDRange
    })
    return ranges;
}