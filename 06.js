// 할당 연산자(assignment)
// 등호 연산자
// let x = 10;

//  6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x);

// //x += 5
// //onsole.log(x);

// //x 를 -10으로

// x -= 30
// console.log(x);


// let a = 10;
// a *= 2;
// console.log(a);/

// 비교연산자(--> true 또는 false를 반환하는 연산자)

//  1. 일치 연산자 (===)
// 타입까지 일치해야 true를 반환하는 연산자
// console.log(2 === 2);
// console.log("2" === 2);
// console.log(2 === "2");

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log("-------");
console.log(2 !== 2);
console.log("2" !== 2)
console.log(2 !== "2");

// 3. 작다 연산자(<)
console.log("-------");
console.log(2 < 3);


// 4. 논리 연산자
// 4-1 (논리곱 연산자) : 모두 true일 때 true 반환
console.log("-------");
console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 

// 4-3(논리부정 연산자 => !)
// : 값을 반대로 바꿈

console.log("-------");
console.log(!true);
let a = true;
console.log(!a);

// 5. 삼항 연산자(중요!)
// 조건에 따라 값을 선택한다.

let x = 10;
let result = x > 5 ? "크다" : "작다"
console.log("-----");
console.log(result);

console.log("------");

let y = 20;

// 3항연산자를 이용해서 y가 10보다 작은 경우 작다를 
// console.log로 출력해주세요.
// 10보다 크다면 크다를 출력해주세요

let answer = y < 10 ? "작다" : "크다";
console.log(answer);