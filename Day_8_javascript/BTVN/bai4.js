function check(n) {

    let originalString = n.toString();
    //tach chuoi thành mảng rồi đảo ngược mảng sau đó chuyển về lại chuỗi
    let reversedString = originalString.split('').reverse().join('');

    return originalString === reversedString;
}

// Test với các giá trị cụ thể
const n1 = 121;
console.log(`Input: n = ${n1}, Output: ${check(n1)}`); // true

const n2 = 123;
console.log(`Input: n = ${n2}, Output: ${check(n2)}`); // false
