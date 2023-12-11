document.querySelector("#btn-signin").addEventListener("click", function () {
  document.querySelector(".form").classList.add("active");
});
function removeclassactive() {
  document.querySelector(".form").classList.remove("active");
}
