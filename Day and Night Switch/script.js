const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  const active = toggle.classList.toggle("active");
  document.body.classList.toggle("night", active);
  toggle.setAttribute("aria-pressed", active);
  toggle.setAttribute(
    "aria-label",
    active ? "Switch to day mode" : "Switch to night mode"
  );
});