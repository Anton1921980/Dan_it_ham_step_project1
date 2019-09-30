let arr = ['hello', 'world', 23, '23', null];
function filterBy(arr, type) {
    return arr.filter(value => typeof value !== type)
}
let sortedArr = filterBy(arr, 'string');
console.log(sortedArr);

