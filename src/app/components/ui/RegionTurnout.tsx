'use client'
import React from "react"

export default function RegionTurnout(){
    return(
        <div>
            <div className="text-2xl font-bold leading-[21px] flex flex-wrap gap-x-[10px] pb-[15px]">
                <div>인천광역시</div>
                <div>연수구</div>
            </div>
            <div className="pb-[10px] border border-white border-b-neutral-200 text-sm">
                <div className="flex justify-between">
                    <p>총투표수</p><span className="text-neutral-600">250,104</span>
                </div>
                <div className="flex justify-between">
                    <span>투표율</span><span className="text-neutral-600">78.7%</span>
                </div>
            </div>
        </div>
    );
}