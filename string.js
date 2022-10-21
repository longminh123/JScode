
var myString = 'Thuc tap o Cybozu hi hi zu zu';
//1.tạo chuỗi
console.log(myString) 
//2.tính độ dài
console.log(myString.length)
//3.Find Index (nếu kh có kí tự trả về -1)
console.log(myString.indexOf('abc'))
//4. Cut string (trích chuỗi)
console.log(myString.slice(5,8))
//5.Replace ('')cho 1 kí tự 
console.log(myString.replace(/zu/g,'Cybozu'))//tất cả kí tự
//6.To upper case
console.log(myString.toUpperCase())
//6.To lower case
console.log(myString.toLowerCase())
//Loai bo khoảng trắng Trim
console.log(myString.trim())
//split (tìm điểm chung (array))
console.log(myString.split(''))
//9 get character by index
console.log(myString.charAt(7))