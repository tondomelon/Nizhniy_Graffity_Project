const boxes = Array.from(document.querySelectorAll(".offer__block"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".offer__block");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}