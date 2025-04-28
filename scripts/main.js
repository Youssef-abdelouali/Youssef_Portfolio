// Dynamically set the current time
const timeEl = document.getElementById("time-display");
function updateTime() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateTime();
setInterval(updateTime, 60000); // update every minute

function goBack() {
  window.history.back();
}
function goHome() {
  window.location.href = "index.html";
}