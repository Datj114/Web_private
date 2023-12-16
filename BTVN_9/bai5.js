let arr = [0, 1, 2, 0, 3, 4, 12, 0];
function sortList(List) {
    let newList = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            newList.unshift(arr[i]);
        } else {
            newList.push(arr[i]);
        }
    }
    return newList;
}
arr = sortList(arr);
console.log(arr);
