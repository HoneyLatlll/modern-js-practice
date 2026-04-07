// 3. 최댓값 찾기
function max(...numbers) {
  //얘는 rest파라미터
  // TODO: 가장 큰 수 반환
  // 힌트: Math.max() 사용 또는 반복문
  return Math.max(...numbers); //얘는 스프레드
}

console.log(max(1, 5, 3, 9, 2)); // 9
console.log(max(10, 20)); // 20
