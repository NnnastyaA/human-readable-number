let singleDigits = [
    { number: 0, name: 'zero'},
    { number: 1, name: 'one'},
    { number: 2, name: 'two'},
    { number: 3, name: 'three'},
    { number: 4, name: 'four'},
    { number: 5, name: 'five'},
    { number: 6, name: 'six'},
    { number: 7, name: 'seven'},
    { number: 8, name: 'eight'},
    { number: 9, name: 'nine'}
];

let twoDigits = [
    { number: 10, name: 'ten'},
    { number: 11, name: 'eleven'},
    { number: 12, name: 'twelve'},
    { number: 13, name: 'thirteen'},
    { number: 14, name: 'fourteen'},
    { number: 15, name: 'fifteen'},
    { number: 16, name: 'sixteen'},
    { number: 17, name: 'seventeen'},
    { number: 18, name: 'eighteen'},
    { number: 19, name: 'nineteen'},
    { number: 20, name: 'twenty'},
    { number: 30, name: 'thirty'},
    { number: 40, name: 'forty'},
    { number: 50, name: 'fifty'},
    { number: 60, name: 'sixty'},
    { number: 70, name: 'seventy'},
    { number: 80, name: 'eighty'},
    { number: 90, name: 'ninety'}
];

module.exports = function toReadable (number) {
    let numberAsString = '';

    if (number.toString().length == 3) {
        let hundredPart = Math.floor(number / 100);
        let twoDigitPart = number - hundredPart * 100;

        singleDigits.forEach(singleDigit => {
            if (hundredPart == singleDigit.number) {
                numberAsString = singleDigit.name + ' hundred'; 
            }
        }) 

        if (twoDigitPart.toString().length == 2) {
            if (twoDigitPart >= 10 && twoDigitPart <= 19) {
                for (let i = 0; i < twoDigits.length; i++) {
                    if (twoDigitPart == twoDigits[i].number) {
                        numberAsString = numberAsString + ' ' + twoDigits[i].name;
                    }
                }
            }
            else if (twoDigitPart >= 20 && twoDigitPart <= 99) {
                let dozensPart = Math.floor(twoDigitPart / 10) * 10;
                let singlePart = twoDigitPart - dozensPart;
    
                for (let i = 0; i < twoDigits.length; i++) {
                    if (dozensPart == twoDigits[i].number) {
                        numberAsString = numberAsString + ' ' + twoDigits[i].name;
                    }
                }
    
                if (singlePart != 0) {
                    singleDigits.forEach(singleDigit => {
                        if (singlePart == singleDigit.number) {
                            numberAsString = numberAsString + ' ' + singleDigit.name; 
                        }
                    }) 
                }
            }
    
        }
        else if (twoDigitPart.toString().length == 1 && twoDigitPart != 0) {
            singleDigits.forEach(singleDigit => {
                if (twoDigitPart == singleDigit.number) {
                    numberAsString = numberAsString + ' ' + singleDigit.name; 
                }
            }) 
        }

    }

    else if (number.toString().length == 2) {
        if (number >= 10 && number <= 19) {
            for (let i = 0; i < twoDigits.length; i++) {
                if (number == twoDigits[i].number) {
                    numberAsString = twoDigits[i].name;
                }
            }
        }
        else if (number >= 20 && number <= 99) {
            let dozensPart = Math.floor(number / 10) * 10;
            let singlePart = number - dozensPart;

            for (let i = 0; i < twoDigits.length; i++) {
                if (dozensPart == twoDigits[i].number) {
                    numberAsString = twoDigits[i].name;
                }
            }

            if (singlePart != 0) {
                singleDigits.forEach(singleDigit => {
                    if (singlePart == singleDigit.number) {
                        numberAsString = numberAsString + ' ' + singleDigit.name; 
                    }
                }) 
            }
        }

    }

    else if (number.toString().length == 1) {
        singleDigits.forEach(singleDigit => {
            if (number == singleDigit.number) {
                numberAsString = singleDigit.name; 
            }
        }) 
    }

    return numberAsString;
}