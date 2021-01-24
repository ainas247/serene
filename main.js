let toggl = document.querySelector(".toggle");
let menuu = document.querySelector(".menu");

toggl.addEventListener('click', myToggle);
function myToggle() {
    menuu.classList.toggle('lop');
}
