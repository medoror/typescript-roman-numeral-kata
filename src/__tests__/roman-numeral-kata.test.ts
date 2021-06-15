import {convertArabicToNumeral, convertNumeralToArabic} from "../roman-numeral-kata";

describe( "convertArabicToNumeral", ()=>{
    it('should return the numeral "I" when the number 1 is given', () =>{
        expect(convertArabicToNumeral(1)).toBe("I");
    });

    it('should return the numeral "II" when the number 2 is given', () =>{
        expect(convertArabicToNumeral(2)).toBe("II");
    });

    it('should return the numeral "III" when the number 3 is given', () =>{
        expect(convertArabicToNumeral(3)).toBe("III");
    });

    it('should return the numeral "IV" when the number 4 is given', () =>{
        expect(convertArabicToNumeral(4)).toBe("IV");
    });

    it('should return the numeral "V" when the number 5 is given', () =>{
        expect(convertArabicToNumeral(5)).toBe("V");
    });

    it('should return the numeral "VI" when the number 6 is given', () =>{
        expect(convertArabicToNumeral(6)).toBe("VI");
    });

    it('should return the numeral "VII" when the number 7 is given', () =>{
        expect(convertArabicToNumeral(7)).toBe("VII");
    });

    it('should return the numeral "IX" when the number 9 is given', () =>{
        expect(convertArabicToNumeral(9)).toBe("IX");
    });
    it('should return the numeral "X" when the number 10 is given', () =>{
        expect(convertArabicToNumeral(10)).toBe("X");
    });

    it('should return the numeral "XII" when the number 12 is given', () =>{
        expect(convertArabicToNumeral(12)).toBe("XII");
    });

    it('should return the numeral "L" when the number 50 is given', () =>{
        expect(convertArabicToNumeral(50)).toBe("L");
    });

    it('should return the numeral "MLXVI" when the number 1066 is given', () =>{
        expect(convertArabicToNumeral(1066)).toBe("MLXVI");
    });

    it('should return the numeral "MCMLXXXIX" when the number 1989 is given', () =>{
        expect(convertArabicToNumeral(1989)).toBe("MCMLXXXIX");
    });
});

describe ("convertNumeralToArabic", () => {
    it('should return the number 1 when the number I is given', () =>{
        expect(convertNumeralToArabic("I")).toBe(1);
    });
    it('should return the number 2 when the number II is given', () =>{
        expect(convertNumeralToArabic("II")).toBe(2);
    });
    it('should return the number 4 when the number IV is given', () =>{
        expect(convertNumeralToArabic("IV")).toBe(4);
    });
    it('should return the number 5 when the number V is given', () =>{
        expect(convertNumeralToArabic("V")).toBe(5);
    });
    it('should return the number 6 when the number VI is given', () =>{
        expect(convertNumeralToArabic("VI")).toBe(6);
    });
    it('should return the number 9 when the number IX is given', () =>{
        expect(convertNumeralToArabic("IX")).toBe(9);
    });
    it('should return the number 10 when the number X is given', () =>{
        expect(convertNumeralToArabic("X")).toBe(10);
    });
    it('should return the number 12 when the number XII is given', () =>{
        expect(convertNumeralToArabic("XII")).toBe(12);
    });
    it('should return the number 14 when the number XIV is given', () =>{
        expect(convertNumeralToArabic("XIV")).toBe(14);
    });
    it('should return the number 15 when the number XV is given', () =>{
        expect(convertNumeralToArabic("XV")).toBe(15);
    });
    it('should return the number 17 when the number XVII is given', () =>{
        expect(convertNumeralToArabic("XVII")).toBe(17);
    });
    it('should return the number L when the number 50 is given', () =>{
        expect(convertNumeralToArabic("L")).toBe(50);
    });
    it('should return the number M when the number 1000 is given', () =>{
        expect(convertNumeralToArabic("M")).toBe(1000);
    });
    it('should return the number MLXVI when the number 1066 is given', () =>{
        expect(convertNumeralToArabic("MLXVI")).toBe(1066);
    });
    it('should return the number MCMLXXXIX when the number 1989 is given', () =>{
        expect(convertNumeralToArabic("MCMLXXXIX")).toBe(1989);
    });
});

