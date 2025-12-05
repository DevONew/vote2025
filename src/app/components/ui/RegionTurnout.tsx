'use client'
import React from "react"

type RegionTurnoutProps = {
    regionName: string;
    totalVotes: number;
    turnout: number;
};

export default function RegionTurnout({ regionName, totalVotes, turnout }: RegionTurnoutProps){
    // 지역명을 공백 기준으로 분리
    const regionParts = regionName.split(' ').filter(part => part !== '합계');

    return(
        <div>
            <div className="text-2xl font-bold leading-[21px] flex flex-wrap gap-x-[10px] pb-[15px]">
                {regionParts.map((part, idx) => (
                    <div key={idx}>{part}</div>
                ))}
            </div>
            <div className="pb-[10px] border border-white border-b-neutral-200 text-sm">
                <div className="flex justify-between">
                    <p>총투표수</p><span className="text-neutral-600">{totalVotes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span>투표율</span><span className="text-neutral-600">{turnout.toFixed(1)}%</span>
                </div>
            </div>
        </div>
    );
}