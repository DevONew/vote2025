'use client';
import React from 'react';
import { regions } from '@/constants/regions';

function getCentroid(pointsStr: string){
    const coords = pointsStr.trim().split(' ').map(Number);
    const xs = coords.filter((_,i) => i %2 === 0);
    const ys = coords.filter((_,i) => i %2 === 1);

    const centerX = xs.reduce((a, b) => a+b, 0 )/ xs.length;
    const centerY = ys.reduce((a, b) => a+b, 0 )/ ys.length;

    return {centerX, centerY};
}

const CartogramRegion = () => {
  return (
    <svg
      viewBox="0 0 750 928"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {regions.map((region) => {
        const { centerX, centerY } = getCentroid(region.polygons[0]);

        return (
          <g key={region.id} id={region.id}>
            {region.polygons.map((points, idx) => (
              <polygon
                key={idx}
                points={points}
                fill="#e0e0e0"
                stroke="#999"
                strokeWidth={1}
              />
            ))}

            {/* 지역 이름 표시 */}
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              fontSize="10"
              fill="#333"
              pointerEvents="none"
            >
              {region.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default CartogramRegion;