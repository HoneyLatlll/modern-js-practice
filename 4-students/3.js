// 레벨3: 객체 배열 사용

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산
// TODO: 전체 학생 평균 계산
// TODO: 최고 점수 학생 찾기
let sumAverage = 0;
let averageAll = 0;
let highStudent = null;
let highAvg = 0;

console.log("=== 학생별 성적 ===");
for (let student of students) {
  let sum = 0;
  let count = 0;
  for (let key in student) {
    if (key != "name") {
      sum += student[key];
      count++;
    }
  }
  const avg = sum / count;
  if (avg > highAvg) {
    highAvg = avg;
    highStudent = student;
  }
  sumAverage += sum / count;
  console.log(`${student.name}: 평균 ${avg.toFixed(2)}점`);
}
averageAll = (sumAverage / students.length).toFixed(2);
console.log("=== 전체 통계 ===");
console.log(`전체 평균: ${averageAll}점`);
console.log(`최고 점수: ${highStudent.name} (${highAvg.toFixed(2)}점)`);

// 예상 출력:
// === 학생별 성적 ===
// 홍길동: 평균 87.67점
// 김철수: 평균 83.67점
// 이영희: 평균 92.33점

// === 전체 통계 ===
// 전체 평균: 87.89점
// 최고 점수: 이영희 (92.33점)
