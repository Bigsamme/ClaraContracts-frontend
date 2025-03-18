"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";

interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number;
    vy: number;
  }

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6; // 60vh height
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const colors = ["#8B5CF6", "#F43F5E", "#FB923C", "#FACC15"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 0.6 - 0.3,
        vy: Math.random() * 0.6 - 0.3,
      });
    }

    const animateParticles = () => {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.animatedCanvas} />
      <div className={styles.heroContent}>
        <motion.h1
          className={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform the Way You Manage Contracts
        </motion.h1>
        <motion.p
          className={styles.heroSubText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ClaraContracts uses AI to analyze, optimize, and streamline your contract management workflow.
        </motion.p>
      </div>
    </section>
  );
}