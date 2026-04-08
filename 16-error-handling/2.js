// 2. 안전한 나눗셈
function safeDivide(a, b) {
  // TODO: 0으로 나누기 체크
  // 0으로 나누면 에러 던지기
  // try-catch로 처리
  try {
    if (a !== 0 && b !== 0) {
      return a / b;
    }
    throw new RangeError("에러 발생: 0으로 나눌 수 없습니다");
  } catch (error) {
    console.error(`${error.message}`);
    return null;
  }
}

console.log(safeDivide(10, 2)); // 5

console.log(safeDivide(10, 0));
// 에러 발생: 0으로 나눌 수 없습니다.
// null
