var myAtoi = function(s) {
    s=s.trim();
    if(!s) return 0;
    var isNegative=false;
    var i=0;
    
    if(s[0]==="-"){
        if(s[1]==="0"){
            i++;
        }
        isNegative=true;
        i++;
    }
    else if (s[0] === "+") {
         if(s[1]==="0"){
            i++;
        }
        i++;
    }
    else if(s[0]==="0"){
        i++;
    }
    answerString="";
    
    for (i; i<s.length; i++){
        const isInteger = /^\d+$/.test(s[i]); 
        if(isInteger===true){
          answerString=answerString+s[i];   
        }
        else{
            break;
        }
    }
     if (!answerString) return 0;
    var result = parseInt(answerString);
    if(isNegative){
        result= -result;
    }
    if (result < -Math.pow(2, 31)) return -Math.pow(2, 31);
    if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    
    return result;
};