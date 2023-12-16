nums = [2, 7, 11, 15, 6];
function searchList(nums, target) {
    //tao object
    const List = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                List.push([i, j]);
            }
        }
    }
    return List;
}
const result = searchList(nums, 13);
console.log(result);
