Array.from(document.querySelectorAll("input")).forEach((input, index) => {
  const dropdownIcon =
    document.getElementsByClassName("bi-caret-down-fill")[index];

  input.addEventListener("input", () => {
    dropdownIcon.style.transform =
      input.value.length > 0 ? "rotate(180deg)" : "rotate(0deg)";
  });
});

const menuBtn = document.querySelector(".bi-three-dots");
const menuBox = document.getElementById("menu_bx");

menuBtn.addEventListener("click", () => {
  menuBox.classList.toggle("ul_active");
});
