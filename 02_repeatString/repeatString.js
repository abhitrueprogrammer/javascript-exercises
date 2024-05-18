const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    repeated_string = ""
    for(let i = 0; i < num; i++){
        repeated_string += string;
    }
    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;
``