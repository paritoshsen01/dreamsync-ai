// Initialize Lucide Icons
lucide.createIcons();

// --- Three.js Background ---
const initThreeJS = () => {
  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i+=3) {
    // Position
    posArray[i] = (Math.random() - 0.5) * 200;
    posArray[i+1] = (Math.random() - 0.5) * 200;
    posArray[i+2] = (Math.random() - 0.5) * 200;

    // Color (cyan to purple)
    const mix = Math.random();
    colorsArray[i] = mix * 0.69; // R
    colorsArray[i+1] = mix * 0.15 + (1-mix) * 0.94; // G
    colorsArray[i+2] = 1; // B
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  // Animation Loop
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) - 0.5;
    mouseY = (event.clientY / window.innerHeight) - 0.5;
  });

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    // Mouse interaction
    particlesMesh.rotation.y += mouseX * 0.05;
    particlesMesh.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

initThreeJS();

// --- Swiper.js Initialization ---
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  initialSlide: 1,
});

// --- GSAP Animations ---
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
const tl = gsap.timeline();
tl.from(".navbar", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
  .from(".badge", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".hero h1", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
  .from(".hero p", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
  .from(".hero-buttons button", { y: 20, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4");

// Scroll Reveal
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
  gsap.fromTo(elem, 
    { y: 50, opacity: 0 }, 
    {
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
      }
    }
  );
});

// Staggered Grid Reveal
gsap.utils.toArray('.gs-left').forEach(function(elem) {
  gsap.fromTo(elem, { x: -50, opacity: 0 }, {
    x: 0, opacity: 1, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: elem, start: "top 85%" }
  });
});

gsap.utils.toArray('.gs-right').forEach(function(elem) {
  gsap.fromTo(elem, { x: 50, opacity: 0 }, {
    x: 0, opacity: 1, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: elem, start: "top 85%" }
  });
});

// --- Logic ---
let lunaActive = false;
function toggleLuna() {
  const panel = document.getElementById('luna-panel');
  if (lunaActive) {
    gsap.to(panel, { y: 20, opacity: 0, duration: 0.3, onComplete: () => panel.style.visibility = 'hidden' });
  } else {
    panel.style.visibility = 'visible';
    gsap.to(panel, { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
  }
  lunaActive = !lunaActive;
}

function startAnalysis() {
  // Animate Progress Bars
  gsap.to("#bar1", { width: "87%", duration: 2, ease: "power2.out" });
  gsap.to("#bar2", { width: "24%", duration: 2, ease: "power2.out", delay: 0.2 });
  gsap.to("#bar3", { width: "62%", duration: 2, ease: "power2.out", delay: 0.4 });
  
  // Animate Numbers
  gsap.to("#val1", { textContent: 87, duration: 2, roundProps: "textContent", ease: "power2.out", onUpdate: function() { document.getElementById("val1").innerHTML = this.targets()[0].textContent + "%"; } });
  gsap.to("#val2", { textContent: 24, duration: 2, roundProps: "textContent", ease: "power2.out", delay: 0.2, onUpdate: function() { document.getElementById("val2").innerHTML = this.targets()[0].textContent + "%"; } });
  gsap.to("#val3", { textContent: 62, duration: 2, roundProps: "textContent", ease: "power2.out", delay: 0.4, onUpdate: function() { document.getElementById("val3").innerHTML = this.targets()[0].textContent + "%"; } });
}
