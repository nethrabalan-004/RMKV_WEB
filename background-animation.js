/**
 * FINFEST '26 - High-Performance Financial Cyber Ambient Background
 * Canvas animation designed specifically for mobile smoothness (60 FPS, non-blocking).
 */

class FinanceBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    
    this.particles = [];
    this.candles = [];
    this.symbols = [];
    this.waves = [];
    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isMobile = window.innerWidth < 768;
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.lastFrameTime = performance.now();
    this.animationFrameId = null;

    this.init();
  }

  init() {
    this.resize();
    this.createElements();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = this.width < 768;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);
  }

  createElements() {
    const particleCount = this.isMobile ? 24 : 55;
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(0, 230, 118, ',
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Distant financial candlesticks
    const candleCount = this.isMobile ? 12 : 28;
    this.candles = [];
    const spacing = this.width / candleCount;
    for (let i = 0; i < candleCount; i++) {
      const isGreen = Math.random() > 0.45;
      this.candles.push({
        x: i * spacing + spacing * 0.5,
        baseY: this.height * 0.75 + (Math.sin(i * 0.6) * 60),
        height: Math.random() * 60 + 20,
        targetHeight: Math.random() * 80 + 20,
        wickTop: Math.random() * 25 + 10,
        wickBottom: Math.random() * 25 + 10,
        isGreen: isGreen,
        speed: Math.random() * 0.02 + 0.008,
        width: this.isMobile ? 6 : 10,
        glowColor: isGreen ? 'rgba(0, 230, 118, 0.12)' : 'rgba(255, 64, 129, 0.12)'
      });
    }

    // Floating financial symbols
    const symbolList = ['₹', '%', '$', '▲', '⚡', '📊', '₿', '€', '📈'];
    const symbolCount = this.isMobile ? 8 : 16;
    this.symbols = [];
    for (let i = 0; i < symbolCount; i++) {
      this.symbols.push({
        char: symbolList[i % symbolList.length],
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.15,
        size: Math.random() * 12 + (this.isMobile ? 10 : 14),
        alpha: Math.random() * 0.25 + 0.08,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.01
      });
    }

    // Smooth undulating financial spline wave
    this.waves = [
      {
        amplitude: this.isMobile ? 35 : 55,
        wavelength: 0.0035,
        speed: 0.0012,
        phase: 0,
        yOffset: 0.65,
        color: 'rgba(0, 240, 255, 0.18)'
      },
      {
        amplitude: this.isMobile ? 25 : 45,
        wavelength: 0.0048,
        speed: -0.0016,
        phase: Math.PI / 3,
        yOffset: 0.72,
        color: 'rgba(0, 230, 118, 0.14)'
      }
    ];
  }

  bindEvents() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.resize();
        this.createElements();
      }, 150);
    }, { passive: true });

    // Subtle parallax that doesn't capture touches or block scroll
    if (!this.isMobile) {
      window.addEventListener('mousemove', (e) => {
        this.targetMouseX = (e.clientX / this.width - 0.5) * 30;
        this.targetMouseY = (e.clientY / this.height - 0.5) * 30;
      }, { passive: true });
    }
  }

  drawGrid(time) {
    const ctx = this.ctx;
    const gridSpacing = this.isMobile ? 40 : 60;
    const offsetY = (time * 0.01) % gridSpacing;

    ctx.save();
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.035)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x < this.width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = offsetY; y < this.height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawCandlesticks(time) {
    const ctx = this.ctx;
    ctx.save();

    for (let i = 0; i < this.candles.length; i++) {
      const c = this.candles[i];
      // Animate height oscillations
      c.height += (c.targetHeight - c.height) * 0.04;
      if (Math.abs(c.targetHeight - c.height) < 1.5) {
        c.targetHeight = Math.random() * (this.isMobile ? 60 : 90) + 20;
        c.isGreen = Math.random() > 0.48;
      }

      const bodyColor = c.isGreen ? 'rgba(0, 230, 118, 0.18)' : 'rgba(255, 64, 129, 0.18)';
      const wickColor = c.isGreen ? 'rgba(0, 230, 118, 0.28)' : 'rgba(255, 64, 129, 0.28)';
      
      const topY = c.baseY - c.height / 2;
      const bottomY = c.baseY + c.height / 2;

      // Wick
      ctx.strokeStyle = wickColor;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(c.x, topY - c.wickTop);
      ctx.lineTo(c.x, bottomY + c.wickBottom);
      ctx.stroke();

      // Body
      ctx.fillStyle = bodyColor;
      ctx.fillRect(c.x - c.width / 2, topY, c.width, c.height);

      // Edge border
      ctx.strokeStyle = wickColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(c.x - c.width / 2, topY, c.width, c.height);
    }

    ctx.restore();
  }

  drawWaves(time) {
    const ctx = this.ctx;
    ctx.save();

    for (let w of this.waves) {
      ctx.beginPath();
      const baseY = this.height * w.yOffset;
      ctx.moveTo(0, baseY);

      for (let x = 0; x <= this.width; x += 15) {
        const y = baseY + Math.sin(x * w.wavelength + time * w.speed + w.phase) * w.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = w.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.restore();
  }

  drawParticles(time) {
    const ctx = this.ctx;
    ctx.save();

    const maxDist = this.isMobile ? 70 : 120;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Draw particle dot
      const currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed) * 0.15;
      ctx.fillStyle = `${p.color}${Math.max(0.1, currentAlpha)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw connecting lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.18;
          ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    ctx.restore();
  }

  drawSymbols() {
    const ctx = this.ctx;
    ctx.save();
    ctx.font = '600 14px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let s of this.symbols) {
      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.vRot;

      if (s.y < -30) {
        s.y = this.height + 30;
        s.x = Math.random() * this.width;
      }
      if (s.x < -30) s.x = this.width + 30;
      if (s.x > this.width + 30) s.x = -30;

      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rot);
      ctx.fillStyle = `rgba(0, 240, 255, ${s.alpha})`;
      ctx.font = `${s.size}px monospace`;
      ctx.fillText(s.char, 0, 0);
      ctx.restore();
    }

    ctx.restore();
  }

  animate(currentTime = performance.now()) {
    // Smooth lerp mouse parallax
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.drawGrid(currentTime);
    this.drawCandlesticks(currentTime);
    this.drawWaves(currentTime);
    this.drawParticles(currentTime);
    this.drawSymbols();

    this.animationFrameId = requestAnimationFrame((t) => this.animate(t));
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// Auto-instantiate when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.finfestBg = new FinanceBackground('bg-canvas');
});
