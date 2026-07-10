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
let a = 10;
let b = 20;
// 使用解構賦值來交換 a 與 b 的值
[a, b] = [b, a];
console.log(a, b);
