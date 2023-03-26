// Set up canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create star
const star = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 30,
  color: '#f2b705'
};

// Create planets
const earth = {
  x: star.x - 200,
  y: star.y,
  radius: 15,
  color: '#1c1c1c',
  speed: 0.005
};

const moon = {
  x: star.x - 100,
  y: star.y,
  radius: 8,
  color: '#f2f2f2',
  speed: 0.01
};

const mars = {
  x: star.x - 300,
  y: star.y,
  radius: 25,
  color: '#b22222',
  speed: 0.003
};

// Animate function
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw star
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
  ctx.fillStyle = star.color;
  ctx.fill();

  // Draw Earth orbit
  ctx.beginPath();
  ctx.arc(star.x, star.y, 200, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  // Draw Moon orbit
  ctx.beginPath();
  ctx.arc(star.x, star.y, 100, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  // Draw Mars orbit
  ctx.beginPath();
  ctx.arc(star.x, star.y, 300, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.stroke();

  // Move and draw planets
  earth.x = star.x + Math.cos(earth.speed) * 200;
  earth.y = star.y + Math.sin(earth.speed) * 200;
  moon.x = star.x + Math.cos(moon.speed) * 100;
  moon.y = star.y + Math.sin(moon.speed) * 100;
  mars.x = star.x + Math.cos(mars.speed) * 300;
  mars.y = star.y + Math.sin(mars.speed) * 300;

  ctx.beginPath();
  ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI * 2);
  ctx.fillStyle = earth.color;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
  ctx.fillStyle = moon.color;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(mars.x, mars.y, mars.radius, 0, Math.PI * 2);
  ctx.fillStyle = mars.color;
  ctx.fill();

  // Increase speeds for next frame
  earth.speed += 0.005;
  moon.speed += 0.01;
  mars.speed += 0.003;

  // Loop animation
  requestAnimationFrame(animate);
}

// Start animation on hover
canvas.addEventListener('mouseover', () => {
animate();
});

// Stop animation on mouseout
canvas.addEventListener('mouseout', () => {
cancelAnimationFrame(animate);
});

// Display planet details on click
canvas.addEventListener('click', (event) => {
const clickX = event.clientX;
const clickY = event.clientY;

// Calculate distance from click to each planet
const earthDistance = Math.sqrt((clickX - earth.x) ** 2 + (clickY - earth.y) ** 2);
const moonDistance = Math.sqrt((clickX - moon.x) ** 2 + (clickY - moon.y) ** 2);
const marsDistance = Math.sqrt((clickX - mars.x) ** 2 + (clickY - mars.y) ** 2);

// Display planet details if clicked within planet radius
if (earthDistance < earth.radius) {
alert('Planet: Earth\nDetails: Third planet from the sun, home to a wide variety of life forms including humans.');
} else if (moonDistance < moon.radius) {
alert('Planet: Moon\nDetails: Earth's only natural satellite, has been the subject of human exploration since ancient times.');
} else if (marsDistance < mars.radius) {
alert('Planet: Mars\nDetails: Fourth planet from the sun, has been the subject of intense interest for its potential to support life.');
}
});
