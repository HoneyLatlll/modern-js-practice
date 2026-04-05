// 1. 다음 코드의 출력을 예측하세요

const user = {
  name: "홍길동",
  greet: function () {
    console.log("안녕하세요, " + this.name + "님");
  },
};

user.greet(); // 출력: 안녕하세요, 홍길동님

let greet = user.greet.bind(user); //bind함수로 this를 user로 고정시킴 안하면 window를 가르켜서 undefined가 나오는거
greet(); // 출력: 안녕하세요, undefined님

// TODO: 왜 결과가 다른지 설명하고, 두 번째도 '홍길동'이 나오게 수정하세요
// user.greet();

// let greet = user;
// greet.greet();
//이렇게 하면 안된대 이건 객체를 그냥 복사해서 한건데 이런 의도로 낸게 아닌듯
