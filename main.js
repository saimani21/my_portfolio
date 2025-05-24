/* ────────── VANTA BACKGROUND (persists across theme) ───────── */
let vantaEffect;
function initVanta() {
  if (vantaEffect) vantaEffect.destroy();
  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00ffff,
    backgroundColor: 0x000000,
    points: 10,
    maxDistance: 20,
    spacing: 15
  });
}
initVanta();

/* ────────── CUSTOM CURSOR ───────── */
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top  = `${e.clientY}px`;
});

/* ────────── THEME TOGGLE ───────── */
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
  initVanta();   // Re-init Vanta so it renders correctly over new background
});
