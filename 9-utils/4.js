// 4. 배열 합치기
function mergeArrays(...arrays) {
  // TODO: 모든 배열을 하나로 합치기
  // 힌트: flat()
  return arrays.flat();
}
//Math.max 에서는 Math.max가 배열을 못 받기 때문에 펼쳐서 숫자로 줘야해서 ...arrays를 사용했던 것

console.log(mergeArrays([1, 2], [3, 4], [5]));
// [1, 2, 3, 4, 5]
