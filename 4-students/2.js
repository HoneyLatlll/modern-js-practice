// 레벨2: 객체 사용
// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};
// TODO: 총점 계산
let sum = 0;
let average = 0;
for (let key in student) {
  if (key != "name") {
    sum += student[key];
  }

  //아래 부분 없어도 되게 위에 count변수를 따로 추가해서 더 잘 만들면 과목수에 따라 자동으로 계산되게 만들 수 있음
  if (key === "math") {
    average = sum / 3;
  }
}
console.log(average);
// TODO: 평균 계산
// TODO: 결과 출력
