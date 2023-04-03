let img1 = document.getElementById("img1").src;
let value = document.getElementById("CollapsedContaier").className;
let img2 = document.getElementById("img2").src;
let value2 = document.getElementById("CollapsedContaier2").className;
let toglr = true;
function toogleBox() {
  if (toglr && value === "Containers") {
    document.getElementById("img1").src = "../../assets/plus.png";
    document
      .getElementById("CollapsedContaier")
      .classList.add("ClpsContainers");
  } else {
    document.getElementById("img1").src = "../../assets/minus.png";
    document
      .getElementById("CollapsedContaier")
      .classList.remove("ClpsContainers");
  }
  toglr = !toglr;
}
function toogleBox2() {
  if (toglr && value2 === "Containers") {
    document.getElementById("img2").src = "../../assets/plus.png";
    document
      .getElementById("CollapsedContaier2")
      .classList.add("ClpsContainers");
  } else {
    document.getElementById("img2").src = "../../assets/minus.png";
    document
      .getElementById("CollapsedContaier2")
      .classList.remove("ClpsContainers");
  }
  toglr = !toglr;
}
