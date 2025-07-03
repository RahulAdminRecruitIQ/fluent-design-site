
"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorldMapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const projectCoordinate = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * dimensions.width;
    const y = ((90 - lat) / 180) * dimensions.height;
    return { x, y };
  };

  // Animated color variants
  const colorVariants = [
    "#ef4444", // red
    "#f97316", // orange  
    "#eab308", // yellow
    "#22c55e", // green
    "#3b82f6", // blue
    "#a855f7", // purple
    "#ec4899", // pink
  ];

  return (
    <div className="w-full h-full relative">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 600"
        className="w-full h-full min-h-[500px]"
        style={{ background: "transparent" }}
      >
        {/* Animated background gradient */}
        <defs>
          <motion.linearGradient
            id="worldMapGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            animate={{
              x1: ["0%", "100%", "0%"],
              y1: ["0%", "100%", "0%"],
              x2: ["100%", "0%", "100%"],
              y2: ["100%", "0%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </motion.linearGradient>
        </defs>

        {/* Enhanced World Map SVG Path */}
        <g>
          {/* Main continents with animated colors */}
          <motion.path
            d="M150 200 L350 180 L550 190 L750 200 L950 210 L1050 200 L1150 190 L1100 280 L1000 320 L900 340 L800 330 L700 320 L600 330 L500 340 L400 330 L300 320 L200 330 L150 340 Z"
            fill="url(#worldMapGradient)"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.4"
            className="text-primary/30"
            animate={{
              strokeOpacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary continent */}
          <motion.path
            d="M250 380 L450 370 L650 380 L850 390 L950 410 L900 480 L800 500 L700 490 L600 480 L500 490 L400 500 L300 490 L250 480 Z"
            fill="url(#worldMapGradient)"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.3"
            className="text-accent/30"
            animate={{
              strokeOpacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Additional landmasses */}
          <motion.path
            d="M800 150 L900 140 L1000 145 L1050 160 L1000 180 L900 175 L800 170 Z"
            fill="currentColor"
            className="text-muted-foreground/20"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </g>

        {/* Animated dots and connections */}
        {dots.map((dot, i) => {
          const startPoint = projectCoordinate(dot.start.lat, dot.start.lng);
          const endPoint = projectCoordinate(dot.end.lat, dot.end.lng);
          const currentColor = colorVariants[i % colorVariants.length];
          
          return (
            <g key={i}>
              {/* Animated connection line with color cycling */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={currentColor}
                strokeWidth="3"
                strokeOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  stroke: colorVariants
                }}
                transition={{
                  pathLength: {
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  },
                  stroke: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              
              {/* Pulsing start dot */}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="6"
                fill={currentColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.5, 1],
                  opacity: [0, 1, 0.8, 1],
                  fill: colorVariants
                }}
                transition={{
                  scale: {
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeOut"
                  },
                  fill: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              
              {/* Pulsing end dot */}
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="6"
                fill={currentColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.5, 1],
                  opacity: [0, 1, 0.8, 1],
                  fill: colorVariants
                }}
                transition={{
                  scale: {
                    duration: 2,
                    delay: i * 0.3 + 0.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 2,
                    delay: i * 0.3 + 0.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeOut"
                  },
                  fill: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }
                }}
              />

              {/* Ripple effect around dots */}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="20"
                fill="none"
                stroke={currentColor}
                strokeWidth="2"
                strokeOpacity="0"
                animate={{
                  r: [6, 25, 6],
                  strokeOpacity: [0.6, 0, 0.6],
                  stroke: colorVariants
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeOut"
                }}
              />
            </g>
          );
        })}

        {/* Floating particles for ambient animation */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            fill="currentColor"
            className="text-primary/40"
            animate={{
              cx: [100 + i * 150, 200 + i * 150, 100 + i * 150],
              cy: [150 + i * 50, 300 + i * 30, 150 + i * 50],
              opacity: [0.2, 0.6, 0.2],
              fill: colorVariants
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default WorldMap;
