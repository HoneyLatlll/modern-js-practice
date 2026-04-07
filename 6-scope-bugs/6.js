// Bug 6
var x = 1;

function outer() {
  console.log(x); // undefined (왜 1이 아닐까?) 전역변수 x와는 관계없고 함수안의 var x가 호이스팅 되면서 undefined가 나옴

  if (false) {
    var x = 2;
  }
}

outer();

// TODO: if문이 실행되지 않는데 왜 x가 undefined일까요?
// if문 안의 var x가 호이스팅 되면서 undefined가 나옴 + var는 함수스코프 단위이기 때문에 if문으로 var를 막을 순 없음

// TODO: var를 let으로 바꾸면 어떻게 될까요?
// let은 블록스코프기때문에 if문안의 x가 아닌 전역변수 x를 console.log(x)가 참조해 1이 출력됨
