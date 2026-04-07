// Bug 1
function calculateTotal() {
  if (true) {
    var discount = 0.1;
  }

  let price = 1000;
  let total = price - price * discount;

  return total;
}
console.log(calculateTotal());
// TODO: 왜 이 코드가 작동하나요?
// TODO: var 를 let으로 바꾸면 어떻게 되나요?
//.. 작동하니까? 가 아니라 var 변수는 if블록스코프를 무시하기때문에 코드가 정상적으로 동작한다 let discount
//였으면 안돌아갔겠네 total에서 discount가 참조 되지 않기떄문에
