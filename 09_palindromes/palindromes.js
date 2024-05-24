const palindromes = function (sentence) {
    sentence =  sentence.toLowerCase()
    sentence = sentence.replace(/\W/g,"" )
    rev_sentence = sentence.split("").reverse().join("")

    if(sentence == rev_sentence){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
