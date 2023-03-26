const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const star = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 30,
  color: '#f2b705'
};

const planets = [  {    name: 'earth',    x: star.x - 200,    y: star.y,    radius: 15,    color: '#1c1c1c',    speed: 0.005  },  {    name: 'moon',    x: star.x - 100,    y: star.y,    radius: 8,    color: '#f2f2f2',    speed: 0.01  },  {    name: 'mars',    x: star.x - 300,    y: star.y,    radius: 25,    color: '#b22222',    speed: 0.003  }];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  ctx.fillStyle = star.color;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(star.x, star.y, 200, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(star.x, star.y, 100, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(star.x, star.y, 300, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  planets.forEach(planet => {
    planet.x = star.x + Math.cos(planet.speed) * (200 + (100 * planets.indexOf(planet)));
    planet.y = star.y + Math.sin(planet.speed) * (200 + (100 * planets.indexOf(planet)));

    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
    ctx.fillStyle = planet.color;
    ctx.fill();

    planet.speed += (0.005 - (0.001 * planets.indexOf(planet)));
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener('mouseover', () => {
  animate();
});

canvas.addEventListener('mouseout', () => {
  cancelAnimationFrame(animate);
});

canvas.addEventListener('click', (event) => {
  const clickX = event.clientX;
  const clickY = event.clientY;

  planets.forEach(planet => {
    const distance = Math.sqrt((clickX - planet.x) ** 2 + (clickY - planet.y) ** 2);

    if (distance < planet.radius) {
      alert(`Planet: ${planet.name}\nDetails: TODO`);
    }
  });
});
