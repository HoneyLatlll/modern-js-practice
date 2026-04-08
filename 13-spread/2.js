// 2. 배열 복사 후 수정
const numbers = [1, 2, 3, 4, 5];

// TODO: Spread로 복사 후 마지막에 6 추가
// const extended =
const extended = [...numbers, 6]; //이게 좀 트랜디
// extended.push(6); 이건 좀 레거시적? 인듯
console.log(numbers); // ... // [1, 2, 3, 4, 5] (원본 유지)
console.log(extended); // [1, 2, 3, 4, 5, 6]
