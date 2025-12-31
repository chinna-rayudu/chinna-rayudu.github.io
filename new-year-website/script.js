const wishes = [
  "May 2026 bring you success and peace 🌟",
  "New year, new goals, new achievements 🚀",
  "Believe in yourself and make this year count 💪",
  "More growth, more happiness, more opportunities ✨",
  "Keep learning, keep building, keep winning 🏆"
];

function changeMessage() {
  const randomIndex = Math.floor(Math.random() * wishes.length);
  document.getElementById("message").innerText = wishes[randomIndex];
}
