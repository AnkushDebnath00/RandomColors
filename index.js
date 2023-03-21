const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("cpybtn");
const color = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(color.textContent);
  // alert("Copied the code: " + colorCode);
  copyBtn.textContent = "Copied";
  copyBtn.style.borderColor = "gray";
  copyBtn.style.color = "gray";
  setTimeout(() => {
    copyBtn.textContent = "Copy to Clipboard";
    copyBtn.style.borderColor = "var(--clr-black)";
    copyBtn.style.color = "var(--clr-black)";
  }, 1000);
});
