var plusOne = function(digits) {
    var number = "";
    var arr = [];
    for( i=0; i<digits.length; i++){
        number+=digits[i];
    }
    number=(BigInt(1)+BigInt(number)).toString();
    for ( i=0;i<number.length;i++){
        arr.push(parseInt(number[i]));
    }
    return arr;
};