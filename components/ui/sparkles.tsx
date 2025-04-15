'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type SparkleProps = {
  id: string;
  size: number;
  color: string;
  style: React.CSSProperties;
};

const Sparkle = ({ id, size, color, style }: SparkleProps) => {
  return (
    <span
      key={id}
      className="absolute inline-block animate-sparkle-fade"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        borderRadius: '50%',
        boxShadow: `0 0 ${size / 2}px ${color}`,
        ...style,
      }}
    />
  );
};

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  particleCount?: number;
  children?: React.ReactNode;
};

export const SparklesCore = ({
  id,
  className,
  background = 'transparent',
  particleColor = '#ffffff',
  minSize = 1,
  maxSize = 3,
  particleCount = 50,
  children,
}: SparklesProps) => {
  const [sparkles, setSparkles] = useState<(SparkleProps & { id: string })[]>(
    [],
  );

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: particleCount }).map((_, i) => ({
        id: `sparkle-${i}-${Date.now()}`,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: particleColor,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          opacity: Math.random(),
        },
      }));
    };

    setSparkles(generateSparkles());

    // Regenerate sparkles periodically for animation effect
    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 3000);

    return () => clearInterval(interval);
  }, [maxSize, minSize, particleColor, particleCount]);

  return (
    <div
      id={id}
      className={cn('relative overflow-hidden', className)}
      style={{ background }}
    >
      {sparkles.map((props) => (
        <Sparkle key={props.id} {...props} />
      ))}
      {children}
    </div>
  );
};

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Caption.ma
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleCount={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}

export function SparklesHero() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleCount={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 relative z-20">
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
          Caption.ma
        </h1>
        <p className="text-white md:text-xl text-center max-w-2xl mx-auto">
          Experience intelligent chat with our cutting-edge AI assistant
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/register"
            className="px-8 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-8 py-3 text-base font-medium text-white border border-white rounded-md hover:bg-white/10 transition-colors"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
