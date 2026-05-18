// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Luna Assistant Toggle
function toggleLuna() {
  const panel = document.getElementById('luna-panel');
  panel.classList.toggle('active');
}

// Simulate Analysis
function startAnalysis() {
  document.getElementById('bar1').style.width = '87%';
  document.getElementById('bar2').style.width = '24%';
  document.getElementById('bar3').style.width = '62%';
}

// Particle Background (Replacing Three.js)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function init() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = [];
  
  for(let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2,
      speedY: Math.random() * 0.5 + 0.1,
      opacity: Math.random()
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  
  particles.forEach(p => {
    ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    
    p.y -= p.speedY;
    if(p.y < 0) {
      p.y = height;
      p.x = Math.random() * width;
    }
  });
  
  requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();
