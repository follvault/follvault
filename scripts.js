// --- FollVault scripts.js (Final Version) ---

document.addEventListener('DOMContentLoaded', () => {

    // --- Particle Background Animation ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particles = [];
        const particleConfig = { count: 50, speed: 0.5, color: "#ff1a1a", size: 2 };
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * particleConfig.speed;
                this.vy = (Math.random() - 0.5) * particleConfig.speed;
                this.size = Math.random() * particleConfig.size + 1;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.fillStyle = particleConfig.color;
                ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
            }
        }
        function initParticles() { for (let i = 0; i < particleConfig.count; i++) { particles.push(new Particle()); } }
        function handleParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(handleParticles);
        }
        window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; particles = []; initParticles(); });
        initParticles(); handleParticles();
    }

    // --- Smooth Scroll Fade Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
    }, { threshold: 0.2 });
    document.querySelectorAll('.scroll-fade').forEach(el => { observer.observe(el); });

    // --- Mobile Navigation & Active Link ---
    // (This standard nav code remains the same)

    
const quantityForm = document.getElementById('quantity-form');

if (quantityForm) {
  quantityForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const quantity = parseInt(document.getElementById('order-quantity').value);

    // --- Define custom link mapping ---
    const orderLinks = {
      5:  "https://forms.gle/VxgbHZb5Hix29Ee79",
      6:  "https://forms.gle/qZR1WA1cyDhewR5b6",
      7:  "https://forms.gle/sXkUgRFg6kUJUYnu6",
      8:  "https://forms.gle/SFFENiMHhttxvKTi9",
      9:  "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      10: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      11: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      12: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      13: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      14: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      15: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      16: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      17: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      18: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      19: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      20: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      21: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      22: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      23: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      24: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      25: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      26: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      27: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      28: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      29: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      30: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      31: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      32: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      33: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      34: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      35: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      36: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      37: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      38: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      39: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      40: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      41: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      42: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      43: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      44: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      45: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      46: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      47: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      48: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      49: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2",
      50: "https://certainwolveshonestly.com/nmrhxwcg?key=1b0ab4e8b74d1334f5f3221ce74e76c2"
    };
  if (quantity >= 5 && quantity <= 50) {
      const button = quantityForm.querySelector('button');
      button.textContent = "Redirecting...";
      button.disabled = true;

      const targetPage = orderLinks[quantity] || "default-order.html";

      setTimeout(() => {
        window.location.href = targetPage;
      }, 600);
    } else {
      alert("Please enter a number between 5 and 50.");
    }
  });
}

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true; submitButton.textContent = 'Sending...';
            const googleScriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_FOR_CONTACTS';
            const formData = new FormData(contactForm);
            // Add a flag to identify this as a contact form submission
            formData.append("form_type", "contact");
            const data = Object.fromEntries(formData.entries());
            try {
                await fetch(googleScriptURL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) });
                contactForm.innerHTML = `<div style="text-align: center; color: var(--bright-glow-text);"><h3>Thank you!</h3><p>Your message has been sent.</p></div>`;
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
                submitButton.disabled = false; submitButton.textContent = 'Send Message';
            }
        });
    }
});

(function initCurvedParticles(){
  const wrap = document.querySelector('.btn-wrap');
  const btn = wrap.querySelector('.neon-btn');
  const canvas = btn.querySelector('.neon-canvas');
  const ctx = canvas.getContext('2d', { alpha: true });

  // Device pixel ratio scaling
  function resize() {
    const rect = btn.getBoundingClientRect();
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    // recompute geometry
    computePaths(rect);
  }

  window.addEventListener('resize', resize);
  // if layout changes, also observe
  new ResizeObserver(resize).observe(btn);

  // Geometry / curve definitions (parametric)
  let paths = []; // array of path objects {points:[], lengthEstimate}
  function computePaths(rect){
    const w = rect.width, h = rect.height;
    // create 3 internal rounded-ish curves visually following the border
    // define normalized control points (x: 0..1, y: 0..1), then scale
    const raw = [
      // inner curve (near top-left to top-right)
      [{x:.08,y:.2},{x:.25,y:.02},{x:.75,y:.02},{x:.92,y:.2}],
      // middle swoop (left-mid -> right-mid)
      [{x:.03,y:.5},{x:.25,y:.65},{x:.75,y:.35},{x:.97,y:.5}],
      // bottom gentle curve
      [{x:.12,y:.78},{x:.32,y:.95},{x:.68,y:.95},{x:.88,y:.78}],
    ];
    paths = raw.map(ctrls => {
      const pts = ctrls.map(p => ({x: p.x * w, y: p.y * h}));
      return {points: pts, estLen: estimateBezierLength(pts)};
    });
  }

  // Simple cubic bezier evaluator
  function cubicAt(p0,p1,p2,p3,t){
    const u = 1 - t;
    const tt = t*t, uu = u*u, ttt = tt*t, uuu = uu*u;
    return {
      x: uuu*p0.x + 3*uu*t*p1.x + 3*u*tt*p2.x + ttt*p3.x,
      y: uuu*p0.y + 3*uu*t*p1.y + 3*u*tt*p2.y + ttt*p3.y
    };
  }

  // Estimate length by sampling
  function estimateBezierLength(pts){
    let L = 0, prev = cubicAt(pts[0],pts[1],pts[2],pts[3],0);
    const steps = 28;
    for(let i=1;i<=steps;i++){
      const p = cubicAt(pts[0],pts[1],pts[2],pts[3], i/steps);
      const dx = p.x - prev.x, dy = p.y - prev.y;
      L += Math.hypot(dx,dy);
      prev = p;
    }
    return L;
  }

  // Particle class (follows a path index and t param)
  class Particle {
    constructor(pathIndex){
      this.pathIndex = pathIndex;
      this.reset(true);
    }
    reset(initial){
      // t ranges slightly negative to allow particles to enter smoothly
      this.t = initial ? Math.random() : -Math.random()*0.4;
      this.speed = (0.0008 + Math.random()*0.0016) * (0.6 + Math.random()*0.9); // normalized per ms
      this.size = 1 + Math.random()*2.6;
      this.alpha = 0.4 + Math.random()*0.9;
      this.hue = 345 + Math.random()*20; // red-magenta hue range
    }
    step(dt){
      this.t += this.speed * dt;
      if(this.t > 1.12) { this.reset(false); }
    }
    getPos(){
      const p = paths[this.pathIndex];
      return cubicAt(p.points[0], p.points[1], p.points[2], p.points[3], Math.min(Math.max(this.t,0),1));
    }
  }

  // Initialize on first run
  let particles = [];
  let last = performance.now();
  let running = true;

  function buildParticles(){
    particles = [];
    if (!paths || paths.length === 0) return;
    // spawn count proportional to button area
    const rect = btn.getBoundingClientRect();
    const area = rect.width * rect.height;
    const base = Math.max(18, Math.round(area / 1200)); // heuristic
    for(let p=0;p<paths.length;p++){
      // each path gets base +/- spread
      const count = Math.round(base * (0.75 + Math.random()*0.8));
      for(let i=0;i<count;i++) particles.push(new Particle(p));
    }
  }

  // Initial resize to set up canvas + paths + particles
  resize();
  buildParticles();

  // subtle background faint curves drawn static (so particles look like traveling)
  function drawStaticCurves(){
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    paths.forEach((path, i) => {
      ctx.beginPath();
      const p0 = path.points[0], p1 = path.points[1], p2 = path.points[2], p3 = path.points[3];
      ctx.moveTo(p0.x, p0.y);
      ctx.bezierCurveTo(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
      ctx.strokeStyle = `rgba(255,20,40,${0.06 + i*0.02})`;
      ctx.lineWidth = 1.6 + i*0.8;
      ctx.lineCap = 'round';
      ctx.stroke();
    });
    ctx.restore();
  }

  // Animation frame
  function frame(now){
    if(!running) return;
    const dt = Math.min(40, now - last); // clamp dt
    last = now;

    // clear with slight alpha to create trails
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // draw faint glow background curves
    drawStaticCurves();

    // draw particle trails using additive blending
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach(p => {
      p.step(dt);
      const pos = p.getPos();
      // small tail: sample a few earlier t points
      const tailCount = 4;
      for(let j=0;j<tailCount;j++){
        const tt = Math.max(0, p.t - j*0.012 - (j*0.002*Math.random()));
        const backPos = cubicAt(paths[p.pathIndex].points[0], paths[p.pathIndex].points[1], paths[p.pathIndex].points[2], paths[p.pathIndex].points[3], Math.min(1, Math.max(0,tt)));
        const s = p.size * (1 - j*0.18);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,${40 + j*10},${40 - j*6},${p.alpha * (1 - j*0.22)})`;
        // glow by drawing several circles around
        ctx.arc(backPos.x, backPos.y, s + (j? 0.6:0), 0, Math.PI*2);
        ctx.fill();
      }
      // bright core
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,60,60,${Math.min(1,p.alpha+0.08)})`;
      ctx.arc(pos.x, pos.y, Math.max(0.8, p.size*0.6), 0, Math.PI*2);
      ctx.fill();
    });

    // optional: draw a thin connecting curved stroke that brightens where particles are dense
    // We'll sample path density by counting particles per path segment (cheap approx)
    ctx.restore();

    // small inner highlight for depth
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = 'rgba(255,20,40,0.01)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.restore();

    requestAnimationFrame(frame);
  }

  // control: pause animation when not visible to save CPU
  const visObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      running = en.isIntersecting;
      if(running) {
        last = performance.now();
        requestAnimationFrame(frame);
      }
    });
  }, {threshold: 0.01});
  visObserver.observe(btn);

  // If layout/size changes, rebuild particles to match new geometry
  const rebuildObserver = new ResizeObserver(() => {
    computeGeometryAndRebuild();
  });
  rebuildObserver.observe(btn);

  function computeGeometryAndRebuild(){
    const rect = btn.getBoundingClientRect();
    computePaths(rect);
    buildParticles();
  }

  // initial start
  requestAnimationFrame(frame);

  // small helper: reinitialize on document font load (if fonts change size)
  if (document.fonts && document.fonts.addEventListener) {
    document.fonts.addEventListener('loadingdone', () => { resize(); computeGeometryAndRebuild(); });
  }

  // click feedback: small particle burst on click
  btn.addEventListener('click', (e)=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // transient burst
    burstParticles(x,y);
  });

  function burstParticles(x,y){
    const burstCount = 24;
    for(let i=0;i<burstCount;i++){
      (function(){
        const px = {x: x + (Math.random()*18-9), y: y + (Math.random()*18-9)};
        const vx = (Math.random()*2-1)*0.9;
        const vy = (Math.random()*-1.6);
        let life = 420 + Math.random()*380;
        const size = 1 + Math.random()*3;
        const col = `rgba(255,${60 + Math.round(Math.random()*40)},${40},1)`;
        (function animateBurst(prevTime){
          const now = performance.now();
          const dt = now - (prevTime||now);
          prevTime = now;
          life -= dt;
          // draw frame for this tiny particle (drawn on top)
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.beginPath();
          ctx.fillStyle = col.replace(',1)',','+ Math.max(0,Math.min(1, life/800))+')');
          ctx.arc(px.x, px.y, Math.max(0.6, size*(life/800)), 0, Math.PI*2);
          ctx.fill();
          ctx.restore();
          px.x += vx * (dt*0.06);
          px.y += vy * (dt*0.06) + 0.002*dt; // gravity
          if(life > 0) requestAnimationFrame(()=> animateBurst(prevTime));
        })();
      })();
    }
  }

  // expose a small API if needed (not required)
  window.__neonButton = { resize, computeGeometryAndRebuild };

})();

/* script.js */

document.querySelectorAll('.neon-btn').forEach(btn => {
  const canvas = btn.querySelector('.neon-canvas');
  const ctx = canvas.getContext('2d', { alpha: true });

  const resize = () => {
    const rect = btn.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  };
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor(path) {
      this.path = path;
      this.t = Math.random();
      this.speed = 0.0006 + Math.random() * 0.0008;
      this.size = 1.2 + Math.random() * 2.8;
      this.alpha = 0.3 + Math.random() * 0.7;
      this.color = `hsl(${340 + Math.random() * 20}, 100%, 60%)`;
    }
    move(dt) {
      this.t += this.speed * dt;
      if (this.t > 1) this.t = 0;
    }
  }

  const makeBezier = (p0, p1, p2, p3, t) => {
    const u = 1 - t;
    return {
      x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
      y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
    };
  };

  const paths = [
    [{x:0.1,y:0.3},{x:0.4,y:0.1},{x:0.6,y:0.9},{x:0.9,y:0.7}],
    [{x:0.2,y:0.8},{x:0.5,y:0.4},{x:0.8,y:0.6},{x:0.95,y:0.3}],
    [{x:0.05,y:0.5},{x:0.3,y:0.2},{x:0.7,y:0.8},{x:0.95,y:0.5}]
  ];

  const particles = [];
  for (let i = 0; i < 90; i++) {
    const path = paths[Math.floor(Math.random() * paths.length)];
    particles.push(new Particle(path));
  }

  let last = performance.now();
  const animate = now => {
    const dt = (now - last);
    last = now;

    const rect = btn.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.globalCompositeOperation = 'lighter';

    particles.forEach(p => {
      p.move(dt);
      const w = rect.width, h = rect.height;
      const [p0, p1, p2, p3] = p.path.map(pt => ({x: pt.x*w, y: pt.y*h}));
      const pos = makeBezier(p0, p1, p2, p3, p.t);

      ctx.beginPath();
      const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 3);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };
  animate(performance.now());
});
/* fire-button.js */

document.querySelectorAll('.fire-btn').forEach(btn => {
  const canvas = btn.querySelector('.fire-canvas');
  const ctx = canvas.getContext('2d', { alpha: true });

  function resize() {
    const rect = btn.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
  resize();
  window.addEventListener('resize', resize);

  // Fire particle system
  class FlameParticle {
    constructor(width, height) {
      this.reset(width, height);
    }
    reset(width, height) {
      this.x = Math.random() * width;
      this.y = height - 10;
      this.size = 1 + Math.random() * 3;
      this.life = 400 + Math.random() * 300;
      this.speedY = 0.3 + Math.random() * 0.8;
      this.alpha = 0.4 + Math.random() * 0.6;
      this.color = `hsl(${20 + Math.random() * 20}, 100%, ${50 + Math.random() * 10}%)`;
    }
    update(dt, width, height) {
      this.y -= this.speedY * dt * 0.05;
      this.x += (Math.random() - 0.5) * 0.5;
      this.life -= dt;
      if (this.life <= 0 || this.y < 0) {
        this.reset(width, height);
      }
    }
    draw(ctx) {
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 6);
      grad.addColorStop(0, this.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const particles = [];
  const maxParticles = 80;
  const rect = btn.getBoundingClientRect();
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new FlameParticle(rect.width, rect.height));
  }

  let last = performance.now();
  function animate(now) {
    const dt = now - last;
    last = now;
    const rect = btn.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    particles.forEach(p => {
      p.update(dt, rect.width, rect.height);
      p.draw(ctx);
    });

    requestAnimationFrame(animate);
  }

  animate(performance.now());

  // Small click burst animation
  btn.addEventListener('click', () => {
    for (let i = 0; i < 15; i++) {
      const flame = new FlameParticle(btn.offsetWidth, btn.offsetHeight);
      flame.y -= 20;
      particles.push(flame);
      setTimeout(() => {
        particles.pop();
      }, 800);
    }
  });
});
/* metallic-button.js */

const metalBtn = document.getElementById("metalButton");

metalBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Add pulse effect
  metalBtn.classList.add("pulse");

  // Wait for animation, then redirect
  setTimeout(() => {
    window.location.href = metalBtn.getAttribute("href");
  }, 600);
});
// scripts.js (revised and simplified)

// --- Configuration ---
