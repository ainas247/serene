let toggl = document.querySelector(".toggle");
let menuu = document.querySelector(".menu");

toggl.addEventListener('click', myToggle);
function myToggle() {
    menuu.classList.toggle('lop');
    console.log('ello');
}

function myFunction() {
  var x = document.querySelector(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
