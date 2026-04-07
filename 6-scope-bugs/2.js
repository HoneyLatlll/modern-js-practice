// Bug 2
let result = [];

for (var i = 0; i < 3; i++) {
  result.push(function () {
    return i;
  });
}

console.log(result[0]()); // 예상: 0, 실제: ?
console.log(result[1]()); // 예상: 1, 실제: ?
console.log(result[2]()); // 예상: 2, 실제: ?

// TODO: 왜 모두 3이 나올까요?

// TODO: var를 let으로 바꾸면 해결됩니다. 왜 그럴까요?
// var는 전역변수처럼 let result=[]; 아래에 var i=0으로 선언되어있는것으로 생각하고 for문을 통해 결국 3이 마지막에
// 저장이 될 것이고 그 상태에서 result 배열에 들어가있는 result.push(function())함수가 실행되기 때문에 i는 3이기때문에
// 모두 3이 나온다. let으로 바꾸면 해당 블록 안에서만 동작하기때문에 result 배열에 i가 0,1,2인 상태로 함수가 저장될것이고
// 그렇기 때문에 각각 0,1,2가 나온다.
