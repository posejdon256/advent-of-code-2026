import { splitData } from "./splitter.ts";
export const one = (data: string): number =>{
    const preparedData = splitData(data);
    let currentPosition = 50;
    let numberOfZeros = 0;
    for(let i  = 0; i < preparedData.length; i ++) {
        const rotation = preparedData[i];
        if(rotation.direction === 'LEFT') {
            currentPosition -= rotation.steps;
            if(currentPosition < 0) {
                currentPosition += 100;
            }
        } else {
            currentPosition += rotation.steps;
        }
        currentPosition %= 100;
        if(currentPosition === 0) {
            numberOfZeros ++;
        }
    }
    return numberOfZeros;
}