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
const isVercelDemo = window.location.hostname.endsWith(".vercel.app");
const demoNavigate = path => window.location.assign(path);
const startDemoSession = role => {
  const user = demoDatabase.users.find(account => account.role === role);
  if (!user) return;
  window.localStorage.setItem("aptisprep-demo-session", JSON.stringify({ userId: user.id, role: user.role }));
  demoNavigate(role === "ADMIN" ? "/admin" : "/student");
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
document.querySelectorAll("[data-demo-login]").forEach(button => button.addEventListener("click", () => startDemoSession(button.dataset.demoLogin === "admin" ? "ADMIN" : "STUDENT")));

if (isVercelDemo) {
  document.querySelectorAll('form[action="/login"]').forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.elements.namedItem("username")?.value?.toLowerCase() || "";
    startDemoSession(email.includes("admin") ? "ADMIN" : "STUDENT");
  }));
  document.querySelectorAll('form[action="/register"]').forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.elements.namedItem("email")?.value?.toLowerCase();
    if (email) {
      demoDatabase.users.push({ id: Date.now(), fullName: form.elements.namedItem("fullName")?.value || "New Student", email, role: "STUDENT", status: "ACTIVE", createdAt: new Date().toISOString() });
      window.aptisPrepDemo.save();
    }
    demoNavigate("/login?registered=1");
  }));
  document.querySelectorAll('form[action="/logout"]').forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    window.localStorage.removeItem("aptisprep-demo-session");
    demoNavigate("/login");
  }));
  document.querySelectorAll('form[action*="/student/tests/"]').forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const isExit = form.action.endsWith("/exit");
    demoNavigate(isExit ? "/student" : "/student/review");
  }));
}

