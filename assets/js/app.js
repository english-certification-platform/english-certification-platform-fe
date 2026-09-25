import { loadDemoDatabase, resetDemoDatabase, saveDemoDatabase } from "./demoDatabase.js";

const demoDatabase = loadDemoDatabase();
window.aptisPrepDemo = {
  database: demoDatabase,
  save: () => saveDemoDatabase(demoDatabase),
  reset: () => {
    window.aptisPrepDemo.database = resetDemoDatabase();
    return window.aptisPrepDemo.database;
  },
};

const toggle = document.querySelector(".password-toggle");
if (toggle) toggle.addEventListener("click", () => { const input = document.getElementById(toggle.getAttribute("aria-controls")); const reveal = input.type === "password"; input.type = reveal ? "text" : "password"; toggle.textContent = reveal ? "Hide" : "Show"; toggle.setAttribute("aria-label", reveal ? "Hide password" : "Show password"); });
const menuButton = document.querySelector("[data-menu-toggle]"), sidebar = document.querySelector("[data-sidebar]");
if (menuButton && sidebar) menuButton.addEventListener("click", () => { const open = sidebar.classList.toggle("sidebar--open"); menuButton.setAttribute("aria-expanded", String(open)); });
document.querySelectorAll("[data-confirm]").forEach(form => form.addEventListener("submit", event => { if (!window.confirm(form.dataset.confirm)) event.preventDefault(); }));
const timer = document.querySelector("[data-countdown]");
if (timer) { let remaining = Number(timer.dataset.countdown) || 0; const display = timer.querySelector("[data-timer-display]"); const form = timer.closest(".question-layout")?.parentElement; let interval; const tick = () => { const mins = Math.floor(remaining / 60), secs = remaining % 60; display.textContent = `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`; timer.classList.toggle("timer--danger", remaining <= 300); if (remaining <= 0) { clearInterval(interval); timer.textContent = "Time is up — submitting…"; form?.requestSubmit(); } remaining--; }; tick(); interval = setInterval(tick, 1000); }
document.querySelectorAll("[data-word-count]").forEach(area => { const output = document.querySelector(area.dataset.wordCount); const update = () => { output.textContent = area.value.trim() ? area.value.trim().split(/\s+/).length : 0; }; area.addEventListener("input", update); update(); });
document.querySelectorAll("[data-record-toggle]").forEach(button => button.addEventListener("click", () => { const target = document.querySelector(button.dataset.recordToggle); const recording = button.dataset.recording === "true"; button.dataset.recording = String(!recording); button.textContent = recording ? "Start recording" : "Stop recording"; target?.classList.toggle("is-recording", !recording); }));
document.querySelectorAll("[data-demo-login]").forEach(button => button.addEventListener("click", () => {
  const role = button.dataset.demoLogin;
  const user = demoDatabase.users.find(account => account.role === (role === "admin" ? "ADMIN" : "STUDENT"));
  if (!user) return;
  window.localStorage.setItem("aptisprep-demo-session", JSON.stringify({ userId: user.id, role: user.role }));
  window.location.assign(role === "admin" ? "/admin" : "/student");
}));

