const repeatString = function(str, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
   
    result += str;
  }
   if(count < 0) {
        return result = "ERROR";

    }
    else{
        return result;
    }

};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
