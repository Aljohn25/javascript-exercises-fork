const removeFromArray = function(array, ...index) {
    
    const newArray = [];

  array.forEach((item) => {
    
    if (!index.includes(item)) {
      newArray.push(item);
    }
  });
  
  return newArray;
};






removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
