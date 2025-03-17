var romanToInt = function(s) {
    const romanNumbers = new Map([
        ["I", 1], 
        ["V", 5], 
        ["X", 10], 
        ["L", 50], 
        ["C", 100], 
        ["D", 500], 
        ["M", 1000]]);
    var answerNumber = 0;
    for(var i=0; i<s.length; i++){
       const currentValue = romanNumbers.get(s[i]);
       if(i+1<s.length){
        const nextValue = romanNumbers.get(s[i+1]);
        if(currentValue<nextValue){
            answerNumber-=currentValue;
        }
        else{
            answerNumber+=currentValue;
        }
       }
       else{
        answerNumber+=currentValue;
       }
    }
    return answerNumber;
};