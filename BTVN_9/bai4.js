function generatePascalTriangle(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                // Nếu ở mép trái hoặc mép phải, gán giá trị là 1
                row.push(1);
            } else {
                // Nếu ở giữa, tính giá trị bằng tổng của hai số phía trên
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }

    return result;
}

// Test với n = 5
const n = 5;
const pascalTriangle = generatePascalTriangle(n);
console.log(pascalTriangle);
