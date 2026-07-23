const reverseString = function(reverse) {

    let result = "";
     for (let i = reverse.length - 1; i >= 0; i--) {
    result += reverse[i];
    }

   return result;

}
reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
