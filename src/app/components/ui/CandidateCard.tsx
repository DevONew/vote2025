'use client'
import React from "react"
import CandidateImage from "./CandidateImage";

type CandidateCard = {
    src: string;
    partyColor: string;
};

export default function CandidateCard(props: CandidateCard) {
    const { src, partyColor } = props;
    return (
        <div>
            <div className="flex">
                <div className="mr-3 py-[14px]">
                    <CandidateImage src={src} />
                </div>
                <div className="flex flex-col justify-center gap-y-[2px]">
                    <div className="flex gap-x-[10px]">
                        <p className="text-base font-semibold">이재명</p>
                        <div className="bg-blue-600 text-white text-[12px] font-semibold rounded-[2px] px-[4px] pt-[4px]" style={{ backgroundColor: partyColor }}>
                            더불어민주당
                        </div>
                    </div>
                    <div className="text-[18px] font-bold leading-[20px]">49.9%</div>
                    <div className="text-[12px] text-neutral-600">101,106표</div>
                </div>
            </div>
            <div>퍼센테이지 바</div>
        </div>
    );
}