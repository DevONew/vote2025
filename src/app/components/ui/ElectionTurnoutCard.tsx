'use client';
import React from "react";

type ElectionTurnoutCardProps = {
    totalVoters: number;
    totalEligible: number;
    turnout: number;
};

export default function ElectionTurnoutCard({ totalVoters, totalEligible, turnout }: ElectionTurnoutCardProps) {
    return (
        <div className="w-[300px]">
            <div className="text-[34px] font-bold mb-4 text-center">제 21대 대통령 선거</div>
            <div className="flex flex-row pl-[10px]">
                <div className="flex flex-col gap-y-2 text-sm border border-white border-r-neutral-200 pr-[25px]">
                    <div className="flex gap-5">
                        <p>투표일</p><span className="text-neutral-600">2025년 6월 3일</span>
                    </div>
                    <div className="flex gap-5">
                        <p>투표자 수</p><span className="text-neutral-600">{totalVoters.toLocaleString()}명</span>
                    </div>
                    <div className="flex gap-5">
                        <p>유권자 수</p><span className="text-neutral-600">{totalEligible.toLocaleString()}명</span>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center text-center">
                    <span className="block text-sm font-bold leading-[17px]">전국투표율</span>
                    <div className="text-[26px] font-bold mt-[5px] leading-[28px] pl-[10px]">{turnout.toFixed(1)}%</div>
                </div>
            </div>
        </div>
    );
}