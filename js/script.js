// Regular Date
let day = document.getElementById("day");
day.innerText =
  new Date().toLocaleDateString("en-US", { weekday: "short" }) + " ,";

let date = document.getElementById("date");
date.innerText = new Date()
  .toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
  .replace(",", "");

// Bg Color
const button = document.getElementById("bg-btn");
button.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Marked as completed
const completedBtn = document.querySelectorAll(".completed-btn");
for (const btn of completedBtn) {
  btn.addEventListener("click", function () {
    alert("Tasked marked as completed!");
    btn.disabled = true;
    btn.classList.add("bg-gray-400");
    let first = document.getElementById("task-assigned");
    // console.log(first);
    let val = parseInt(first.innerText);
    --val;
    first.innerHTML = "0" + val;

    let last = document.getElementById("total-task");
    let vall = parseInt(last.innerText);
    // console.log(vall);
    ++vall;
    last.innerHTML = vall;
  });
}
