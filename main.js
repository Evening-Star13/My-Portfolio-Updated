document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const linkGroup = document.querySelector(".link-group");

  hamburger.addEventListener("click", function () {
    linkGroup.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
