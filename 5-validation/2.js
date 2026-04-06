// 사용자 설정 (일부만 입력됨)
const userSettings = {
  theme: "dark",
  notifications: false, // false도 유효한 설정!
  language: null,
};

// TODO: 기본 설정 객체 생성
// theme: 없으면 'light'
// notifications: 없으면 true (false도 유효!)
// language: 없으면 'ko'
// fontSize: 없으면 14

// ?? 연산자 활용!

const defaultSettings = {
  // TODO: 이 부분을 userSettings 이용해서 채워넣으세요
  // theme:
  //   userSettings.theme !== null && userSettings.theme !== undefined
  //     ? userSettings.theme
  //     : "light",
  // notifications:
  //   userSettings.notifications !== null &&
  //   userSettings.notifications !== undefined
  //     ? userSettings.notifications
  //     : "true",
  // language:
  //   userSettings.language !== null && userSettings.language !== undefined
  //     ? userSettings.language
  //     : "ko",
  // fontSize:
  //   userSettings.fontSize !== null && userSettings.fontSize !== undefined
  //     ? userSettings.fontSize
  //     : 14,
  theme: userSettings.theme ?? "light",
  notifications: userSettings.notifications ?? true,
  language: userSettings.language ?? "ko",
  fontSize: userSettings.fontSize ?? 14,
};

//객체 안의 스프레드 속성 수정시 유용하다
// const defaultSettings = {
//   ...userSettings,
//   theme: "light",
//   notifications: true,
//   language: "ko",
//   fontSize: 14,
// };

console.log(defaultSettings);

// 예상 출력
// { theme: 'dark', notifications: false, language: 'ko', fontSize: 14 }
