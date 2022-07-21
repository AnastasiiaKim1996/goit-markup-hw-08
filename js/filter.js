const filterEl = document.querySelector(".button-navigation ");
const projectEl = document.querySelectorAll(".portfolio-item");

const clickButtonCase = ({ target }) => {
  const btnActive = document.querySelector(".filter__btn--active");
  if (target.nodeName !== "BUTTON") {
    return;
  }

  if (target.hasAttribute("data-all")) {
    if (btnActive) {
      btnActive.classList.remove("filter__btn--active");
    }
    target.classList.add("filter__btn--active");
    btnAll();
    return;
  }
  if (target.hasAttribute("data-site")) {
    if (btnActive) {
      btnActive.classList.remove("filter__btn--active");
    }
    target.classList.add("filter__btn--active");
    btnSite();
    return;
  }
  if (target.hasAttribute("data-app")) {
    if (btnActive) {
      btnActive.classList.remove("filter__btn--active");
    }
    target.classList.add("filter__btn--active");
    btnApp();
    return;
  }
  if (target.hasAttribute("data-design")) {
    if (btnActive) {
      btnActive.classList.remove("filter__btn--active");
    }
    target.classList.add("filter__btn--active");
    btnDesign();
    return;
  }
  if (target.hasAttribute("data-mark")) {
    if (btnActive) {
      btnActive.classList.remove("filter__btn--active");
    }
    target.classList.add("filter__btn--active");
    btnMark();
    return;
  }
};

filterEl.addEventListener("click", clickButtonCase);

const btnAll = () => {
  projectEl.forEach((num) => num.classList.remove("none"));
};
const btnSite = () => {
  projectEl.forEach((num) => num.classList.add("none"));
  projectEl.forEach((num) => {
    if (num.hasAttribute("data-item-site")) {
      num.classList.remove("none");
    }
  });
};

const btnApp = () => {
  projectEl.forEach((num) => num.classList.add("none"));
  projectEl.forEach((num) => {
    if (num.hasAttribute("data-item-app")) {
      num.classList.remove("none");
    }
  });
};
const btnDesign = () => {
  projectEl.forEach((num) => num.classList.add("none"));
  projectEl.forEach((num) => {
    if (num.hasAttribute("data-item-design")) {
      num.classList.remove("none");
    }
  });
};
const btnMark = () => {
  projectEl.forEach((num) => num.classList.add("none"));
  projectEl.forEach((num) => {
    if (num.hasAttribute("data-item-mark")) {
      num.classList.remove("none");
    }
  });
};
