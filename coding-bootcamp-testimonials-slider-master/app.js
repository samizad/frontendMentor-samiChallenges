var next = document.querySelectorAll(".next");
var prev = document.querySelectorAll(".prev");
var john = document.querySelector(".john");
var tanya = document.querySelector(".tanya");
console.log(john.getAttribute("display"));
next.forEach(function (item) {
  if (true) {
    item.onclick = () => {
      john.style.display = "block";
      tanya.style.display = "none";
    };
  } else {
    john.style.display = "none";
    tanya.style.display = "block";
  }
});
prev.forEach(function (item) {
  item.onclick = () => {
    john.style.display = "none";
    tanya.style.display = "block";
  };
});
