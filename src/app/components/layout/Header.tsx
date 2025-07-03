'use client';
import React from "react";

export default function Header() {
    return (
    <header className="relative overflow-hidden bg-gradient-to-br from-pink-800 via-violet-900 to-indigo-900">
      <div className="absolute inset-0 bg-glow-center pointer-events-none z-0"></div>
      <div className="text-white max-w-screen-xl mx-auto flex items-center justify-center p-20">
            <h1 className="text-6xl font-bold text-center">2025 제 21대 대선 지도</h1>
      </div>
    </header>
    );
}