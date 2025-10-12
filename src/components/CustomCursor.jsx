import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const followMouse = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.left = `${currentX}px`;
        glowRef.current.style.top = `${currentY}px`;
      }

      requestAnimationFrame(followMouse);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followMouse);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating glow aura following cursor */}
      <div
        ref={glowRef}
        className="fixed z-[9999] pointer-events-none w-[600px] h-[700px] rounded-full animate-pulse opacity-70"
        style={{
          background: 'radial-gradient(circle,rgba(149, 50, 242, 0.75), transparent 50%)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
}
// import { useEffect, useRef } from "react";

// export default function FireflyCursor() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const createFirefly = (x, y) => {
//       const size = Math.random() * 6 + 4;
//       const firefly = document.createElement("div");

//       // Basic style
//       firefly.style.position = "absolute";
//       firefly.style.left = `${x}px`;
//       firefly.style.top = `${y}px`;
//       firefly.style.width = `${size}px`;
//       firefly.style.height = `${size}px`;
//       firefly.style.borderRadius = "50%";
//       firefly.style.pointerEvents = "none";
//       firefly.style.zIndex = 9999;

//       // Glow & color
//       firefly.style.background = "rgba(149, 50, 242, 0.8)";
//       firefly.style.boxShadow = `0 0 10px rgba(149, 50, 242, 0.8), 0 0 20px rgba(149, 50, 242, 0.5)`;

//       // Animation
//       const angle = Math.random() * 2 * Math.PI;
//       const distance = Math.random() * 40 + 20;
//       const dx = Math.cos(angle) * distance;
//       const dy = Math.sin(angle) * distance;

//       const duration = 1000 + Math.random() * 600;

//       firefly.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
//       containerRef.current.appendChild(firefly);

//       // Animate in next tick
//       requestAnimationFrame(() => {
//         firefly.style.transform = `translate(${dx}px, ${dy}px) scale(0.8)`;
//         firefly.style.opacity = "0";
//       });

//       // Remove after animation
//       setTimeout(() => {
//         containerRef.current.removeChild(firefly);
//       }, duration);
//     };

//     const handleMouseMove = (e) => {
//       for (let i = 0; i < 2; i++) {
//         createFirefly(e.clientX, e.clientY);
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 pointer-events-none z-[9999]"
//     ></div>
//   );
// }
