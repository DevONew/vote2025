'use client';
import React from "react";
import Image from "next/image";

type Props = {
    src:string;
    alt?: string;
};

export default function CandidateImage({ src, alt = '후보자 이미지' }: Props) {
    return (

        <div className="w-[40px] h-[40px] relative rounded-full overflow-hidden ">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-[center_-3px]"
                sizes="40px"
            />
        </div>
    );
}