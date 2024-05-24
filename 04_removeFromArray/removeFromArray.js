const removeFromArray = function (array, ...args) {
    for (element of args) {
        array = array.filter((num) => { if (element !== num) return true; else return false });
    }
    return array
};
// Do not edit below this line
module.exports = removeFromArray;
