/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.reduce(function(filteredArr, element, index) {
        if (fn.call(this, element, index)) {
            filteredArr.push(element);
        }
        return filteredArr;
    }, []);
};
