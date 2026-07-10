import '../index.css';

console.log('TypeScript & Vite development environment is successfully set up!');

// A simple interactive counter to verify TypeScript interactivity
const button = document.querySelector('button[type="button"]');
if (button) {
  let count = 0;
  const originalText = button.textContent || '確認送出';
  button.addEventListener('click', () => {
    count++;
    button.textContent = `${originalText} (點擊次數: ${count})`;
    console.log(`Button clicked ${count} times`);
  });
}
console.log("hello world")
