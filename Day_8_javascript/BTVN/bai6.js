function findGCD(a, b) {
    // Thuật toán Euclid để tìm Ước chung lớn nhất
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    // Bội chung nhỏ nhất = (a * b) / UCLN
    return (a * b) / findGCD(a, b);
}

// Test với các giá trị cụ thể
const a = 10,
    b = 20;
const gcd = findGCD(a, b);
const lcm = findLCM(a, b);

console.log(`Input: a = ${a}, b = ${b}, Output: UCLN = ${gcd}, BCNN = ${lcm}`);
