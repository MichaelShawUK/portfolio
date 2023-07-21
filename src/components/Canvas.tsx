import { useRef, useEffect } from "react";
import { RingType } from "../types";

function createRing(
  x: number,
  y: number,
  radius: number,
  ctx: CanvasRenderingContext2D
) {
  return {
    x,
    y,
    radius,

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 0, 255, 0.1)";
      ctx.stroke();
    },

    update() {
      this.draw();
      this.radius *= 1.03;
    },
  };
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const rings: RingType[] = [];

    function generateRing() {
      if (!canvas || !ctx) return;
      setTimeout(() => {
        rings.push(createRing(mouse.x, mouse.y, 5, ctx));
        generateRing();
      }, 50);
    }

    function animate() {
      window.requestAnimationFrame(animate);
      if (!canvas || !ctx) return;
      ctx.fillStyle = "rgba(0, 0, 50, 0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rings.forEach((ring, index) => {
        const maxRadius = Math.max(canvas.width, canvas.height);
        if (ring.radius > maxRadius) {
          rings.splice(index, 1);
        } else {
          ring.update();
        }
      });
    }

    animate();
    generateRing();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="presentation"
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};

export default Canvas;
