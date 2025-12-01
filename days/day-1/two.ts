import { splitData } from "./splitter.ts";

export const two = (data: string): number => {
    const preparedData = splitData(data);
    let currentPosition = 50;
    let numberOfZeros = 0;
    for(let i  = 0; i < preparedData.length; i ++) {
        const rotation = preparedData[i];
        if(rotation.direction === 'LEFT') {
            if(currentPosition === 0) {
                numberOfZeros --;
            }
            currentPosition -= rotation.steps;
            const numberOf100Inside = Math.floor(Math.abs(currentPosition / 100));
            if(currentPosition < 0) {
                currentPosition += ((numberOf100Inside + 1) * 100);
                numberOfZeros += (numberOf100Inside + 1);
            }
            if(currentPosition === 0 && numberOf100Inside === 0) {
                numberOfZeros ++;
            }
        } else {
            currentPosition += rotation.steps;
            const numberOf100Inside = Math.abs(Math.floor(currentPosition / 100));
            if(currentPosition >= 100) {
                currentPosition -= (numberOf100Inside * 100);
            }
            numberOfZeros += numberOf100Inside;
            if(currentPosition === 0 && numberOf100Inside === 0) {
                numberOfZeros ++;
            }
        }
        currentPosition %= 100;
    }
    return numberOfZeros;
}