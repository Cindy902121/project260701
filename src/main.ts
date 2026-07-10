import "../index.css";

console.log(
  "TypeScript & Vite development environment is successfully set up!",
);

// A simple interactive counter to verify TypeScript interactivity
const button = document.querySelector('button[type="button"]');
if (button) {
  let count = 0;
  const originalText = button.textContent || "確認送出";
  button.addEventListener("click", () => {
    count++;
    button.textContent = `${originalText} (點擊次數: ${count})`;
    console.log(`Button clicked ${count} times`);
  });
}
console.log("hello world");
// null
// undefined
// let c = 1
let a = 30;
let b = 40;
let c = 50;
// 使用解構賦值來交換 a 與 b 的值
//[a, b] = [b, a];
//console.log(a, b);

// 判斷式 > < == != >= <=
if (a > b) {
  console.log("a is bigger");
} else {
  console.log("b is bigger");
}
if (a+b>c && a+c>b && b+c>a){
  console.log("Triangle");
} else {
  console.log("Not a Triangle");
}
let year = 2024
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
  console.log("Leap year");
} else {
  console.log("Not a Leap year");
}

// i=i+1
console.log("start");
for (let i = 0; i < 10; i++){
  console.log(i);
}
console.log("end");

console.log("start");
let e = 0; 
for (let i = 1; i <= 10; i++) {
    e = e + i; 
}
console.log(e);
console.log("end");
