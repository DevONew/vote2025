'use client';
import React from 'react';
import { regions } from '@/constants/regions';

function getCentroid(pointsStr: string) {
  const coords = pointsStr.trim().split(' ').map(Number);
  const xs = coords.filter((_, i) => i % 2 === 0);
  const ys = coords.filter((_, i) => i % 2 === 1);

  const centerX = xs.reduce((a, b) => a + b, 0) / xs.length;
  const centerY = ys.reduce((a, b) => a + b, 0) / ys.length;

  return { centerX, centerY };
}

function splitLabel(label: string) {
  if(label === '철원군화천군양구군') {
    return '철원군\n화천군\n양구군';
  }
  
  if(label === '세종특별자치시'){
    return '세종시';
  }

  return label.replace(/[^시군구]+[시군구]/g, (match) => match + '\n').trim();
}

const CartogramRegion = () => {
  return (
    <svg
      viewBox="0 0 750 928"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {regions.map((region) => (
        <g key={region.id} id={region.id}>
          {region.polygons.map((points, idx) => {
            const { centerX, centerY } = getCentroid(points);
            const lines = splitLabel(region.id).split('\n');
            const fontSize = lines.length >= 3 ? 7 : 8;
            const dyOffset = lines.length >= 3 ? -(lines.length - 1) * 0.55 : -(lines.length - 1) * 0.7;
            const offsetX = 2;
            const offsetY = 2;

            return (
              <g key={`${region.id}-${idx}`}>
                <polygon points={points} fill="#e0e0e0" stroke="#999" strokeWidth={1}/>
                <text x={centerX + offsetX} y={centerY+ offsetY} textAnchor="middle" fontSize="10" fill="#333" pointerEvents="none">
                  {lines.map((line, i) => (
                    <tspan key={i} x={centerX + offsetX} dy={`${i === 0 ? dyOffset : 1.2}em`} fontSize={fontSize}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
};

export default CartogramRegion;