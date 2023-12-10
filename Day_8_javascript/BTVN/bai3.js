function countLastWordCharacters(s) {
    // Tách chuỗi thành các từ
    const words = s.trim().split(/\s+/);

    // Lấy từ cuối cùng từ mảng
    const lastWord = words[words.length - 1];

    // Đếm số ký tự của từ cuối cùng
    const count = lastWord.length;

    return count;
}

// Test với các giá trị cụ thể
const s1 = 'Hello World';
console.log(`Input: s = "${s1}", Output: ${countLastWordCharacters(s1)}`); // 5

const s2 = 'HTML, CSS, Javascript, ';
console.log(`Input: s = "${s2}", Output: ${countLastWordCharacters(s2)}`); // 10
