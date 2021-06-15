export const convertArabicToNumeral = (num: number): string => {
    let numeral = "";
    const numeralsTable: { numValue: number, numeral: string }[] = [
        {numValue: 1000, numeral: "M"},
        {numValue: 900, numeral: "CM"},
        {numValue: 500, numeral: "D"},
        {numValue: 400, numeral: "CD"},
        {numValue: 100, numeral: "C"},
        {numValue: 90, numeral: "XC"},
        {numValue: 50, numeral: "L"},
        {numValue: 40, numeral: "XL"},
        {numValue: 10, numeral: "X"},
        {numValue: 9, numeral: "IX"},
        {numValue: 5, numeral: "V"},
        {numValue: 4, numeral: "IV"},
        {numValue: 1, numeral: "I"}
    ];
    for (let i = 0; i < numeralsTable.length; i++) {
        while (num >= numeralsTable[i].numValue) {
            numeral += numeralsTable[i].numeral;
            num -= numeralsTable[i].numValue;
        }
    }
    return numeral;
};

export const convertNumeralToArabic = (numeral: string): number => {
    const numeralValueMap = new Map<string, number>();
    numeralValueMap.set("I", 1);
    numeralValueMap.set("V", 5);
    numeralValueMap.set("X", 10);
    numeralValueMap.set("L", 50);
    numeralValueMap.set("C", 100);
    numeralValueMap.set("D", 500);
    numeralValueMap.set("M", 1000);

    let numeralsArray: string[] = Array.from(numeral);
    let num = 0;
    let numValue: number | undefined = 0;

    while (numeralsArray.length) {
        let removedArrayElement = numeralsArray.shift();
        if (removedArrayElement) {
            numValue = numeralValueMap.get(removedArrayElement);
            if (numValue) {
                let numValueOfFirstElement = numeralValueMap.get(numeralsArray[0]);
                num += numValue * (numValue < numValueOfFirstElement! ? -1 : 1);
            }
        }
    }
    return num;
};