// 4. 배열의 평균 구하기
function getAverage(numbers) {
  // TODO: 배열 요소들의 평균 반환
  // 힌트: 합계 / 개수
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

console.log(getAverage([10, 20, 30])); // 20

// 5. 문자열 뒤집기
function reverseString(str) {
  // TODO: 문자열을 거꾸로 반환
  // 힌트: split(''), reverse(), join('')
  const rts = str.split("").reverse().join("");
  return rts;
}

console.log(reverseString("hello")); // olleh

// 6. 팩토리얼 계산 (재귀 사용)
function factorial(n) {
  // TODO: n! 계산
  // 5! = 5 * 4 * 3 * 2 * 1 = 120
  // 힌트: if (n <= 1) return 1;
  //       return n * factorial(n - 1);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
