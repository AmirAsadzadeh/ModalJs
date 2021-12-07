const showModalBtn = document.querySelector(".show-modal");

const modal = document.querySelector(".modal");

const backdrop = document.querySelector(".backdrop");

const closeBtn = document.querySelector(".close-modal");

const confirmBtn = document.querySelector(".confirm-modal");

showModalBtn.addEventListener("click", () => {
  modal.style.opacity = "1";
  modal.style.transform = "translateY(10vh)";
  backdrop.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backdrop.style.display = "none";
});

backdrop.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backdrop.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backdrop.style.display = "none";
});
