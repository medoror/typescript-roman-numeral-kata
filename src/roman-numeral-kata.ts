const numeralValueMap = new Map<string, number>([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]);


export const convertArabicToNumeral = (givenNumber: number): string => {
    let computedNumeralString = "";

    numeralValueMap.forEach((numeralValue: number, numeral: string) => {
        while (givenNumber >= numeralValueMap.get(numeral)!) {
            computedNumeralString += numeral;
            givenNumber -= numeralValue;
        }
    });
    return computedNumeralString;
};

export const convertNumeralToArabic = (numeral: string): number => {
    let numeralsArray: string[] = Array.from(numeral);
    let computedNumeralValue = 0;

    while (numeralsArray.length) {
        let numeralValueOfShiftedElement = numeralValueMap.get(numeralsArray.shift()!);
        let valueForNextNumeral = numeralValueMap.get(numeralsArray[0]);
        computedNumeralValue += numeralValueOfShiftedElement! * (numeralValueOfShiftedElement! < valueForNextNumeral! ? -1 : 1);
    }
    return computedNumeralValue;
};