"use client";

import React from 'react';
import WebGLBackground from './webglBackground';

/**
 * HomeHero Component
 * Features a dynamic WebGL background with premium typography
 */
const HomeHero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* WebGL Background */}
      <WebGLBackground />
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <h1 className="text-4xl uppercase md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
          Lead Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Designer</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          I lead cross-functional teams to ship intuitive, scalable SaaS experiences that drive user adoption, reduce churn, and accelerate growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
          <button className="px-10 py-5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
            Explore Work
          </button>
        </div>
    
      </div>
      
    </section>
  );
};

export default HomeHero;
