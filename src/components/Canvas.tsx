import { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "rgb(0, 0, 50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 1000; i++) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${200 + Math.random() * 55}, ${
        200 + Math.random() * 55
      }, ${150 + Math.random() * 155}, ${Math.random()})`;
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        2 * Math.PI,
        true
      );
      ctx.fill();
    }
  }, []);

  return <canvas role="presentation" ref={canvasRef}></canvas>;
};

export default Canvas;
