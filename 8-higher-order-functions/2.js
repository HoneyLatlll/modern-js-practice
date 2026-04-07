// 2. 조건에 맞는 요소만 필터링
function filter(array, test) {
  // TODO: test 함수가 true를 반환하는 요소만 모아서 반환
  const result = [];
  // for (let arr = 0; arr < array.length; arr++) {
  //   if (test(array[arr]) === true) {
  //     result.push(array[arr]);
  //   }
  // }
  for (let arr of array) {
    //이것도 for of 문 사용 가능
    if (test(arr)) {
      //test(arr)만 적어도 충분
      result.push(arr);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filter(numbers, function (n) {
  return n % 2 === 0;
});

console.log(evens); // [2, 4, 6]
