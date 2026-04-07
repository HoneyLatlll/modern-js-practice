// Bug 3
let count = 0;

function increment() {
  let count = count + 1;
  return count;
}

console.log(increment()); // ReferenceError!

// TODO: 왜 에러가 날까요?
// 함수 안에 let count를 초기화하면 해당 let count 변수는 함수가끝나고 없어지기때문에 에러가 난다.
// 값이 없는데 count + 1 에서 count를 참조하려했기때문에 오류가 난다.
// TODO: 어떻게 수정해야 할까요?
//let을 일단 떼! 묻지도 말고 떼 일단 화나니까는 좀 말이 셌고 let을 없앰으로써 초기화가 아닌 재할당을 해야한다.
//함수 안을 let newCount = ... return newCount; 로 바꾼다.
