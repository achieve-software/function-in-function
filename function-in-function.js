//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//**************************************************/
const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    default:
      break;
  }
  return result;
};

console.log(compute(4, 3, "/"));
console.log(compute(2, 4, "*"));
console.log(compute(3, 1, "+"));
