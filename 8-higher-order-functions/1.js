// 1. 배열의 각 요소에 함수 적용
function map(array, transform) {
  // TODO: 각 요소에 transform 함수를 적용한 새 배열 반환
  const result = [];
  // for문으로 배열 순회
  // transform 함수 호출 (hint: transform(array[i]))
  // 결과를 result에 추가 (hint: push 메서드 사용)
  for (let arr = 0; arr < array.length; arr++) {
    //for of 문 사용해도 가능
    // result.push(array[arr]);
    // result[arr] = transform(array[arr]);
    result.push(transform(array[arr])); //한줄로 축약가능
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = map(numbers, function (n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6, 8]
