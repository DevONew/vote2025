'use client'
import React from "react";
import { useEffect, useState } from 'react';

export type PercentageBarProps = {
    percentage: number; 
    color: string;
};

export default function PercentageBar({percentage, color}:PercentageBarProps){
    const [animatedWidth, setAnimatedWidth] = useState(0);

    useEffect(() => {
        // 마운트 이후에만 퍼센트 적용
        const timeout = setTimeout(() => {
        setAnimatedWidth(percentage);
        }, 100); // 살짝 딜레이 줘야 transition 보임

        return () => clearTimeout(timeout);
    }, [percentage]);
    return (
        <div className="w-full h-1.5 bg-gray-200 rounded overflow-hidden">
            <div className="h-full transition-all duration-300 ease-in-out" 
                style={{
                width: `${animatedWidth}%`,
                backgroundColor: color,
                }}>
            </div>
        </div>
    );
};