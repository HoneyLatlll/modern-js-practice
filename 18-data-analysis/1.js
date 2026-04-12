const sales = [
  {
    id: 1,
    product: "노트북",
    category: "전자제품",
    price: 1200000,
    quantity: 2,
    date: "2024-01-15",
  },
  {
    id: 2,
    product: "마우스",
    category: "전자제품",
    price: 30000,
    quantity: 5,
    date: "2024-01-16",
  },
  {
    id: 3,
    product: "키보드",
    category: "전자제품",
    price: 80000,
    quantity: 3,
    date: "2024-01-16",
  },
  {
    id: 4,
    product: "책상",
    category: "가구",
    price: 200000,
    quantity: 1,
    date: "2024-01-17",
  },
  {
    id: 5,
    product: "의자",
    category: "가구",
    price: 150000,
    quantity: 2,
    date: "2024-01-17",
  },
  {
    id: 6,
    product: "모니터",
    category: "전자제품",
    price: 300000,
    quantity: 2,
    date: "2024-01-18",
  },
  {
    id: 7,
    product: "램프",
    category: "가구",
    price: 50000,
    quantity: 4,
    date: "2024-01-18",
  },
];

// 1. 총 매출액 계산
function getTotalRevenue(sales) {
  // TODO: reduce 사용
  // price * quantity의 합계
  const sum = sales.reduce((acc, sale) => acc + sale.price * sale.quantity, 0);
  return sum;
}

console.log(getTotalRevenue(sales)); // 4090000

// // 2. 카테고리별 매출액
// function getRevenueByCategory(sales) {
//   // TODO: reduce로 카테고리별 그룹화 후 계산
// }
function getRevenueByCategory(sales) {
  const groupCategory = sales.reduce((acc, sale) => {
    const category = sale.category; //cateagory에 현재 sale의 category 값을 넣는다 "전자제품" 혹은 "가구"
    if (!acc[category]) {
      // const acc = {}; // 빈 객체
      // acc["전자제품"] = []; // 키가 없어도 바로 생성됨!
      //자바스크립트는 없는 키에 값을 넣으면 그냥 자동으로 만들어준다
      // acc = { "전자제품": [] }
      acc[category] = [];
    }
    acc[category].push(sale.price * sale.quantity); // 빈 배열에 현재 sale의 price 값을 넣는다
    return acc; //위를 모두 완료한 누적 acc를 반환한다
  }, {});

  for (let key in groupCategory) {
    // let sum = 0;
    // for (let price of groupCategory[key]) {
    //   sum += price;
    // }
    // groupCategory[key] = sum;
    groupCategory[key] = groupCategory[key].reduce(
      (acc, price) => acc + price,
      0,
    );
  }

  return groupCategory;
}
console.log(getRevenueByCategory(sales));
// { '전자제품': 3390000, '가구': 700000 }
