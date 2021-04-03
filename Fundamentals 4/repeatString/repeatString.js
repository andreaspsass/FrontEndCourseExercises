const repeatString = function (str, num) {
    if(num < 0){
        return 'ERROR';
    }
    let ourString = "";
    while (num > 0) {
        ourString += str;
        num--;
    }
    
    return ourString;
    
}

module.exports = repeatString;