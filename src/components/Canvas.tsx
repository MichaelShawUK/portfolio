import { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function init() {
    const canvas = canvasRef.current;
    if (!canvas) throw new Error("No canvas element");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not get context");
    return { canvas, ctx };
  }

  function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
  }

  useEffect(() => {
    const { canvas, ctx } = init();
    draw(canvas, ctx);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(canvas, ctx);
    });
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
