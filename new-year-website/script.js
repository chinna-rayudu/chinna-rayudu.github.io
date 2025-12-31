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





const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(0, canvas.width);
  const y = random(0, canvas.height / 2);
  const color = `hsl(${random(0, 360)}, 100%, 60%)`;

  for (let i = 0; i < 50; i++) {
    fireworks.push({
      x,
      y,
      radius: 2,
      color,
      angle: random(0, Math.PI * 2),
      speed: random(2, 6),
      life: 100
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) fireworks.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 800);
animate();
