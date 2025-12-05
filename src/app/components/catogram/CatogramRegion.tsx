'use client';
import React from 'react';
import { regions } from '@/constants/regions';
import { getRegionColor, type ElectionData } from '@/utils/colorUtils';

type CatogramRegionProps = {
  electionData: ElectionData[];
  onRegionHover?: (regionId: string | null) => void;
};

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
    return ['철원군', '화천군', '양구군'];
  }
  
  if(label === '세종특별자치시'){
    return ['세종시'];
  }

  return label.replace(/[^시군구]+[시군구]/g, (match) => match + '\n').trim().split('\n');
}

function getLabelLayout(lines: string[]){
  const fontSize = lines.length >= 3 ? 7 : 8;
  const dyOffset = lines.length >= 3 ? -(lines.length - 1) * 0.55 : -(lines.length - 1) * 0.7;
  const offsetX = 2;
  const offsetY = 2;
  return { fontSize, dyOffset, offsetX, offsetY };

}

const CartogramRegion = ({ electionData, onRegionHover }: CatogramRegionProps) => {
  return (
    <svg viewBox="0 0 750 928" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {regions.map((region) => {
        // 해당 지역의 1위 후보 정당 색상 가져오기
        const regionColor = getRegionColor(region.id, electionData);

        return (
          <g key={region.id} id={region.id}>
            {region.polygons.map((points, idx) => {
              const { centerX, centerY } = getCentroid(points);
              const lines = splitLabel(region.id);
              const { fontSize, dyOffset, offsetX, offsetY } = getLabelLayout(lines);
              const x = centerX + offsetX;
              const y = centerY + offsetY;

              return (
                <g key={`${region.id}-${idx}`}>
                  <polygon
                    points={points}
                    fill={regionColor}
                    stroke="#999"
                    strokeWidth={1}
                    onMouseEnter={() => onRegionHover?.(region.id)}
                    onMouseLeave={() => onRegionHover?.(null)}
                    style={{ cursor: 'pointer' }}
                  />
                  <text x={x} y={y} textAnchor="middle" fill="#ffffff" pointerEvents="none">
                    {lines.map((line, i) => (
                      <tspan key={i} x={x} dy={`${i === 0 ? dyOffset : 1.2}em`} fontSize={fontSize}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};

export default CartogramRegion;