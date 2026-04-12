const products = [
  { name: "노트북", category: "전자제품" },
  { name: "마우스", category: "전자제품" },
  { name: "책상", category: "가구" },
  { name: "의자", category: "가구" },
];

const grouped = products.reduce((acc, product) => {
  const category = product.category;

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(product);
  return acc;
}, {});

console.log(grouped);
// {
//   '전자제품': [{name: '노트북', ...}, {name: '마우스', ...}],
//   '가구': [{name: '책상', ...}, {name: '의자', ...}]
// }
