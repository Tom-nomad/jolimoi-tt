const intToRomanMap: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,
};

function convertIntToRoman (numberToConvert: number) {
    let result: String = "";

    for (const key of Object.keys(intToRomanMap)) {
        const repeatCounter = Math.floor(numberToConvert / intToRomanMap[key]);
        numberToConvert -= repeatCounter * intToRomanMap[key];
        result += key.repeat(repeatCounter);
    }
    return result;
}


module.exports = {
   convertIntToRoman,
   intToRomanMap,
};
