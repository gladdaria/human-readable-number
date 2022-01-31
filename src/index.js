module.exports = function toReadable (number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const from10to19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let firstDigit = '';
    let secondDigit = '';
    let thirdDigit = '';
    let result = '';
      
      if (number < 10) {
            result = digits[number];
      } else if ((number >= 10) && (number < 20)) {
            result = from10to19[number - 10];
      } else if ((number >= 20) && (number < 100)) {
            n = number.toString()
            firstDigit = +(n.slice(0,1));
            secondDigit = +(n.slice(1));
            if (secondDigit > 0) {
                result = `${dozens[firstDigit]} ${digits[secondDigit]}`
            } else {
                result = `${dozens[firstDigit]}`
            } 
      } else {
            n = number.toString()
            firstDigit = +(n.slice(0,1));
            secondDigit = +(n.slice(1,2));
            thirdDigit = +(n.slice(2));
            if (secondDigit === 0 && thirdDigit === 0) {
                result = `${digits[firstDigit]} hundred`
            } else if (secondDigit === 0){
                result = `${digits[firstDigit]} hundred ${digits[thirdDigit]}`
            } else if ((secondDigit > 1) && (thirdDigit === 0)) {
                result = `${digits[firstDigit]} hundred ${dozens[secondDigit]}`;  
            } else if ((secondDigit === 1)) {
                result = `${digits[firstDigit]} hundred ${from10to19[thirdDigit]}`;  
            } else {
                result = `${digits[firstDigit]} hundred ${dozens[secondDigit]} ${digits[thirdDigit]}`;
            }
      }
    return result;
}
