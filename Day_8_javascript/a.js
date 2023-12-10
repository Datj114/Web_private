const a = 4;
console.log(a);
//hoisting cau bien len dau
//var khai báo biến
//let giống var không có hoisting
//const giống let nhưng ko thay đổi được, nên khuyên dùng

//string
const b = 'hell';
//template literals - giong string nhung minh co thể xuống dòng
let c = `a`;

//slice(start,end),substring(start,end) giống slide nhưng ko chuyền tham số âm, substr(start,length) dùng cắt chuỗi
const ss = '1234aaaaaaa';
const slice = ss.slice(2, -4);
const x = ss.substring(2, -4);
const y = ss.substr(1, 7);
console.log(slice);
console.log(x);
console.log(y);

//replace(source, target) chuyển chữ cái source đầu tiên thành target
//replaceAll(,) chuyển tất
console.log(ss.replace('a', 'A'));
console.log(ss.replace('a', 'A').replace('2', 'd'));
// regexd //
console.log(ss.replaceAll(/[a-zA-Z]/g, 'X'));
//toUpperCase(), toLowerCase() viết chữ hoa và chữ thường

//concat(string) nối vào cuối
console.log(ss.concat('abcdefj'));

//trim() xoá tất cả ký tự cách đầu cuối, trinStart(),trimEnd()

//padStart(maxLenght,fillString),padEnd(maxLenght,fillString)
//thêm fillstring vào chuỗi cho đủ maxlenght
console.log(b.padEnd(10, 'o'));
const giay=5
//chuyen so ve chuoi `${giay}` hoac (giay+"")

//charAt(index) in ra ký tự trong bảng ascii

//split(separator,limit?) chia mảng theo separator , limit có thể có hoặc không
const x1='1 2 3 4 5 6'
console.log(x1.split(" ").reverse())
console.log(x1.split(" ").reverse().join("a"))
//join chuyển từ mảng về chuỗi

