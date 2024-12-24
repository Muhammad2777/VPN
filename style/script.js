let load = document.querySelector(".load");
window.addEventListener("load", () => {
  load.classList.remove("load-none");
});

setTimeout(() => {
  load.classList.add("load-none");
}, 2000);
