const students = [
  { id: 1, name: "홍길동", score: 85, grade: "B" },
  { id: 2, name: "김철수", score: 92, grade: "A" },
  { id: 3, name: "이영희", score: 78, grade: "C" },
  { id: 4, name: "박민수", score: 95, grade: "A" },
  { id: 5, name: "정수진", score: 88, grade: "B" },
];

// 5. 이름만 추출 (map 사용)
// TODO:
// const names =
const names = students.map((student) => student.name);
console.log(names); // ['홍길동', '김철수', ...]

// 6. A학점 학생만 필터링 (filter 사용)
// TODO:
// const aGrade =
const aGrade = students.filter((student) => student.grade === "A");
console.log(aGrade);
// [{id: 2, name: '김철수', ...}, {id: 4, name: '박민수', ...}]

// 7. 점수 90점 이상 학생들의 이름 (filter + map 사용)
// TODO:
// const highScorers =
const highScores = students //순서도 잘 생각해야함 map먼저오면 안되고 filter먼저 와야함
  .filter((student) => student.score >= 90)
  .map((student) => student.name);
console.log(highScores); // ['김철수', '박민수']

// 8. ID로 학생 찾기
function findStudentById(id) {
  // TODO: find 사용
  const findStudent = students.find((student) => student.id === id);
  return findStudent;
}

console.log(findStudentById(3));
// {id: 3, name: '이영희', score: 78, grade: 'C'}

// 9. 평균 점수 계산
function getAverageScore() {
  // TODO: reduce 또는 forEach 사용
  // 평균 === 점수총합 / 학생수
  const sum = students.reduce((acc, student) => student.score + acc, 0);
  const avg = (sum / students.length).toFixed(1);
  return avg;
}

console.log(getAverageScore()); // 87.6
