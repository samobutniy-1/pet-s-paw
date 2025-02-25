document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const openBtn = document.querySelector(".header__burger-menu");
  const closeBtn = document.querySelector(".modal__close");

  // Відкрити модальне вікно
  openBtn.addEventListener("click", function () {
    modal.classList.add("active");
    overlay.classList.add("active");
  });

  // Закрити модальне вікно
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Закриття при кліку на затемнення
  overlay.addEventListener("click", function () {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});
