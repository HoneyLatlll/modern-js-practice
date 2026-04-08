// const users = [
//   { name: "홍길동", age: 25 },
//   { name: "김철수", age: 30 },
//   { name: "이영희", age: 28 },
// ];

// const newUsers = users.map((user) => {
//   return { ...user, height: 100 };
// }); // [ { name, age, height: 100 }, ... ]
// console.log(newUsers);

const products = [
  { name: "노트북", category: "전자제품", price: 1000000 },
  { name: "마우스", category: "전자제품", price: 30000 },
  { name: "책상", category: "가구", price: 200000 },
  { name: "의자", category: "가구", price: 150000 },
];

const cheapProducts = products.filter((product) => product.price < 200000); // price 20만원 미만인 것만
console.log(cheapProducts);
