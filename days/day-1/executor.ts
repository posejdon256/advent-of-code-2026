import { one } from "./one.ts";
import { two } from "./two.ts";
import { units } from "./units.ts";

const data = '';

const executor = (): void => {
    const areUnitsAreOk = units(one, two);
    if(areUnitsAreOk) {
        console.log('UNIT TESTS - OK')
        console.log('ONE RESULT - ', one());
        console.log('TWO RESULT - ', two());
        return;
    }
    console.log('UNIT TEST - FAILED')
}

executor();