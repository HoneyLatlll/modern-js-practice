// 1. 다음 함수들을 Arrow Function으로 변환하세요

// 기존
function double(n) {
  return n * 2;
}

const double2 = (n) => n * 2;
console.log(double2(2));
// TODO: Arrow Function으로 변환.
// 힌트: const double = 화살표함수

// 기존
function greet(name) {
  return "Hello, " + name;
}

const greet2 = (name) => "Hello, " + name;
console.log(greet2("무요"));
// TODO: Arrow Function으로 변환

// 기존
function sum(a, b, c) {
  return a + b + c;
}

const sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 3));

// TODO: Arrow Function으로 변환
