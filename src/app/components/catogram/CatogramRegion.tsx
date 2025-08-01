'use client';
import React from 'react';
import { regions } from '@/constants/regions';

const CartogramRegion = () => {
  return (
    <svg
      viewBox="0 0 750 928"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {regions.map((region) => (
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
        </g>
      ))}
    </svg>
  );
};

export default CartogramRegion;