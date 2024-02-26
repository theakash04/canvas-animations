const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particalArray = [];

//setting particle sdesign
class Particles {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  // updating particle x & y as per speed
  update() {
    if (this.x <= 0 || this.x >= canvas.width) {
      this.speedX *= -1;
    }
    if (this.y <= 0 || this.y >= canvas.height) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  //circle draw fnc
  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

//pushing new Particle in Array
function creation() {
  for (let i = 0; i < 100; i++) {
    particalArray.push(new Particles());
  }
}

creation();

//handling particle from array to draw and update its value
function HandleParticles() {
  for (let i = 0; i < particalArray.length; i++) {
    particalArray[i].update();
    particalArray[i].draw();
  }
}

//animate function
function Animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  HandleParticles();
  requestAnimationFrame(Animate);
}

Animate();
