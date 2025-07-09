'use client'
import React from "react";
import {useEffect, useState} from "react";

export type PercentageBarProps = {
    percentage: number; 
    color: string;
};

export default function PercentageBar({percentage, color}:PercentageBarProps){
    return (
        <div className="w-full h-1.5 bg-gray-200 rounded overflow-hidden">
            <div className="h-full transition-all duration-300 ease-in-out" 
                style={{
                width: `${percentage}%`,
                backgroundColor: color,
                }}>
            </div>
        </div>
    );
};