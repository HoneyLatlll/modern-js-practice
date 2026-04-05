// 레벨1: 기본 유효성 검사
// 회원가입 폼 데이터
const signupData = {
  username: "",
  email: "user@example.com",
  password: "1234",
  age: 0,
};

// TODO: username 체크 (빈 문자열 체크)
// TODO: email 체크 (@가 포함되어 있는지)
// TODO: password 체크 (6자 이상)
// TODO: age 체크 (0도 유효한 값!)

function checkData(Data) {
  let check = 0;
  for (let userData in Data) {
    if (userData === "username" && !Data[userData]) {
      console.log("username 문제 발생");
      check++;
    } else if (userData === "email" && !Data[userData].includes("@")) {
      console.log("email 문제 발생");
      check++;
    } else if (userData === "password" && Data[userData].length < 6) {
      console.log("password 문제 발생");
      check++;
    } else if (
      userData === "age" &&
      (typeof Data[userData] !== "number" || Data[userData] < 0)
    ) {
      //typeof로 비교할때 Number가 아니라 "number"문자열로 비교해야함
      console.log("age 문제 발생");
      check++;
    }
  }

  if (check === 0) {
    console.log("가입 성공");
  }

  // if (!Data.username) {
  //   console.log("username 문제 발생");
  // } else if (!Data.email.includes("@")) {
  //   console.log("email 문제 발생");
  // } else if (Data.password.length < 6) {
  //   console.log("password 문제 발생");
  // } else if (typeof Data.age != Number) {
  //   console.log("age 문제 발생");
  // } else {
  //   console.log("가입 성공");
  // }
}
checkData(signupData);

// 모든 검사 통과하면 "가입 성공"
// 하나라도 실패하면 어떤 항목이 문제인지 출력
