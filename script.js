let table = document.getElementById("table");
let elements = document.querySelectorAll("td");

let cellNumber = "1";
let cellColor = "red";

table.onclick = function (event) {
  let td = event.target.closest("td");
  if (!td) return;
  if (!table.contains(td)) return;
  cellNumber = td.textContent;
};

button.onclick = function () {
  cellColor = document.getElementById("myColor").value;
  for (let elem of elements) {
    if (elem.textContent === cellNumber) {
      elem.style.backgroundColor = "white";
    } else {
      elem.style.backgroundColor = cellColor;
    }
  }
};


