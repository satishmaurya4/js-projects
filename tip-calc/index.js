const numberInputEl = document.querySelector("input[type=number]");
const rangeEl = document.querySelector("input[type=range]");
const billValueEl = document.querySelector(".bill-value");
const tipValueEl = document.querySelector(".tip-value");

let billAmt;
let tipAmt;

numberInputEl.addEventListener("keyup", (e) => {
  billAmt = e.target.value;
  billValueEl.innerText = billAmt;
  console.log(billAmt, "hsdhf");
});

rangeEl.addEventListener("change", (e) => {
  const tipValue = e.target.value;
  if (billAmt) {
    tipAmt = Math.floor((billAmt / 100) * tipValue);
    tipValueEl.innerText = tipAmt;
    billValueEl.innerText = +billAmt + +tipAmt;
  }

  console.log(e.target.value, "hsdhf", billAmt, tipAmt);
});

console.log(billValueEl, numberInputEl, rangeEl);
