// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let num = 2;

function isEven(num) {
    return num % 2 === 0 ? true : false;
    
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(isEven(num));
