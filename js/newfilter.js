const filterEl = document.querySelector(".portfolio-btn-list");
const filterImg = document.querySelectorAll(".portfolio-item");

filterEl.addEventListener("click", (event) => {
  if (event.target.nodeName !== "LI") {
    return false;
  }

  let filterClass = event.target.dataset("f");

  filterImg.forEach((elem) => {
    elem.classList.remove("hide");
    if (!elem.classList.contains(filterEl)) {
      elem.classList.add("hide");
    }
  });
});
