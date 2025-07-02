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
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const projectCoordinate = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * dimensions.width;
    const y = ((90 - lat) / 180) * dimensions.height;
    return { x, y };
  };

  return (
    <div className="w-full h-full relative">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ background: "transparent" }}
      >
        {/* World Map SVG Path */}
        <g>
          <path
            d="M158.5 200.5c-1.5-2.5-3.5-4.5-6-6c-2.5-1.5-5.5-2.5-8.5-2.5s-6 1-8.5 2.5c-2.5 1.5-4.5 3.5-6 6c-1.5 2.5-2.5 5.5-2.5 8.5s1 6 2.5 8.5c1.5 2.5 3.5 4.5 6 6c2.5 1.5 5.5 2.5 8.5 2.5s6-1 8.5-2.5c2.5-1.5 4.5-3.5 6-6c1.5-2.5 2.5-5.5 2.5-8.5s-1-6-2.5-8.5z"
            fill="currentColor"
            className="text-muted-foreground/20"
          />
          {/* Simplified world map outline */}
          <path
            d="M100 150 L200 140 L300 145 L400 150 L500 155 L600 150 L700 145 L800 150 L900 155 L900 200 L850 220 L800 240 L750 250 L700 245 L650 240 L600 245 L550 250 L500 245 L450 240 L400 245 L350 250 L300 245 L250 240 L200 245 L150 250 L100 245 Z"
            fill="currentColor"
            className="text-muted-foreground/10"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {/* Additional continents */}
          <path
            d="M200 300 L300 295 L400 300 L500 305 L600 300 L700 295 L800 300 L850 320 L800 340 L750 350 L700 345 L650 340 L600 345 L550 350 L500 345 L450 340 L400 345 L350 350 L300 345 L250 340 L200 345 Z"
            fill="currentColor"
            className="text-muted-foreground/10"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </g>

        {/* Animated dots and connections */}
        {dots.map((dot, i) => {
          const startPoint = projectCoordinate(dot.start.lat, dot.start.lng);
          const endPoint = projectCoordinate(dot.end.lat, dot.end.lng);
          
          return (
            <g key={i}>
              {/* Connection line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                strokeOpacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              {/* Start dot */}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              
              {/* End dot */}
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2 + 0.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default WorldMap;