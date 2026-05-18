// Initialize Icons
lucide.createIcons();

// --- Three.js Neural Grid ---
const initThreeJS = () => {
  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, -10, 40);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Create a futuristic glowing grid/wireframe landscape
  const geometry = new THREE.PlaneGeometry(200, 200, 40, 40);
  
  // Displace vertices to create mountains/waves
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // Use simple math sine waves to create smooth terrain
    const z = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 3 + Math.sin(x * 0.05) * 5;
    pos.setZ(i, z);
  }
  
  geometry.computeVertexNormals();

  const material = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  const landscape = new THREE.Mesh(geometry, material);
  landscape.rotation.x = -Math.PI / 2;
  landscape.position.y = -15;
  scene.add(landscape);

  // Animation
  const clock = new THREE.Clock();
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  const animate = () => {
    const time = clock.getElapsedTime();
    
    // Move landscape to simulate flying over it
    landscape.position.z = (time * 2) % 5;
    
    // Subtle camera movement based on mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 2 - 10 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

initThreeJS();

// --- Swiper.js ---
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  initialSlide: 1,
});

// --- GSAP Animations Polish ---
gsap.registerPlugin(ScrollTrigger);

// Hero Sequence (Smooth & Cinematic)
const tl = gsap.timeline();
tl.from(".navbar", { y: -20, opacity: 0, duration: 1, ease: "power2.out" })
  .from(".gs-hero", { 
    y: 30, 
    opacity: 0, 
    duration: 1.2, 
    stagger: 0.2, 
    ease: "power3.out" 
  }, "-=0.5");

// Sections Reveal
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
  gsap.fromTo(elem, 
    { y: 40, opacity: 0 }, 
    {
      y: 0, 
      opacity: 1, 
      duration: 1.2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
      }
    }
  );
});

// Grid Reveal (Left & Right)
gsap.fromTo('.gs-left', 
  { x: -40, opacity: 0 }, 
  { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: '.grid-2', start: "top 80%" } }
);

gsap.fromTo('.gs-right', 
  { x: 40, opacity: 0 }, 
  { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: '.grid-2', start: "top 80%" } }
);

// --- Logic ---
let lunaActive = false;
function toggleLuna() {
  const panel = document.getElementById('luna-panel');
  if (lunaActive) {
    gsap.to(panel, { y: 20, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => panel.style.visibility = 'hidden' });
  } else {
    panel.style.visibility = 'visible';
    gsap.fromTo(panel, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.2)" });
  }
  lunaActive = !lunaActive;
}

function startAnalysis() {
  // Smooth Progress Bars
  gsap.to("#bar1", { width: "87%", duration: 2.5, ease: "power3.inOut" });
  gsap.to("#bar2", { width: "24%", duration: 2.5, ease: "power3.inOut", delay: 0.1 });
  gsap.to("#bar3", { width: "62%", duration: 2.5, ease: "power3.inOut", delay: 0.2 });
  
  // Smooth Number Counters
  gsap.to("#val1", { textContent: 87, duration: 2.5, roundProps: "textContent", ease: "power3.inOut", onUpdate: function() { document.getElementById("val1").innerHTML = this.targets()[0].textContent + "%"; } });
  gsap.to("#val2", { textContent: 24, duration: 2.5, roundProps: "textContent", ease: "power3.inOut", delay: 0.1, onUpdate: function() { document.getElementById("val2").innerHTML = this.targets()[0].textContent + "%"; } });
  gsap.to("#val3", { textContent: 62, duration: 2.5, roundProps: "textContent", ease: "power3.inOut", delay: 0.2, onUpdate: function() { document.getElementById("val3").innerHTML = this.targets()[0].textContent + "%"; } });
}
