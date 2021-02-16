module.exports = function toReadable(number) {
    let x =  ['','one','two','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let y = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    let newNum = number.toString();
    
    if(number === 0) return 'zero'
    
    if(number < 20) return x[number];
    
    if(newNum.length === 2) return y[newNum[0]] + ' ' + x[newNum[1]];
    
    if(newNum.length === 3) {
      if(newNum[1] === '0' && newNum[2] === '0'){
        return x[newNum[0]] + 'hundred'
      } else {
        return x[newNum[0]] + 'hundred ' + toReadable(+(newNum[1] + newNum[2]))
      }
    }
    
    if(newNum.length === 4) {
      if(newNum[1] === '0' && newNum[2] === '0' && newNum[3] === '0') {
        return x[newNum[0]] + 'thousand'
      }
    }
    
};
