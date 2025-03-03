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
