// Bug 5
greet(); // 정상 작동

function greet() {
  console.log("안녕하세요!");
}

sayHi(); // Uncaught TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

// TODO: 왜 greet()는 되고 sayHi()는 안 될까요?
//호이스팅 시 greet함수의 경우에는 위로 올라가 정상적으로 작동이 되는데,
//sayHi는 var sayHi가 호이스팅 되어 함수타입이 아닌 var sayHi가 호이스팅 되기때문에 함수 호출시 var타입이라 함수타입이
//아니어서 타입에러가 나온다.
