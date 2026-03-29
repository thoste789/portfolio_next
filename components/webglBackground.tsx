"use client";

import React, { useEffect, useRef } from 'react';

interface WebGLBackgroundProps {
  primaryColor?: [number, number, number]; // RGB values between 0 and 1
  className?: string;
}

const WebGLBackground: React.FC<WebGLBackgroundProps> = ({ 
  primaryColor = [1.0, 0.35, 0.05], 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    // Fragment Shader - Dynamic wave pattern
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_color;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Center and scale
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        float t = u_time * 0.4;
        
        // Create organic, overlapping waves
        float wave = 0.0;
        for(float i = 1.0; i < 5.0; i++) {
          p.x += sin(p.y * i * 0.5 + t) * 0.3;
          p.y += cos(p.x * i * 0.4 + t * 0.8) * 0.2;
          wave += sin(length(p) * 2.5 - t);
        }

        // Color palette mapping
        vec3 colorA = u_color * 0.02; // Deep shadow
        vec3 colorB = u_color * 0.6;  // Mid tone
        vec3 colorC = u_color * 1.8;  // Highlights
        
        float val = wave * 0.2 + 0.5;
        vec3 finalColor = mix(colorA, colorB, val);
        finalColor = mix(finalColor, colorC, pow(val, 4.0) * 0.6);
        
        // Contrast enhancement
        finalColor = pow(finalColor, vec3(0.9));
        
        // Vignette effect
        float d = length(uv - 0.5);
        finalColor *= 1.4 - d * 1.0;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;
    
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    
    if (!vertexShader || !fragmentShader) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 
       1, -1, 
      -1,  1, 
      -1,  1, 
       1, -1, 
       1,  1
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const colorLoc = gl.getUniformLocation(program, 'u_color');

    let animationFrameId: number;
    const startTime = performance.now();

    const resize = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const render = (currentTime: number) => {
      resize();
      const elapsed = (currentTime - startTime) * 0.001;
      
      gl.clearColor(0.02, 0.02, 0.02, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform3fv(colorLoc, primaryColor);
      
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [primaryColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default WebGLBackground;
