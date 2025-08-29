import SajuTable from "@/components/SajuTable";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-md aspect-[375/2081]">
        <Image
          src="/frontend-source.svg"
          alt="기본 이미지"
          fill
          className="w-full h-auto"
        />
        <p className="absolute top-[32.2%] left-[10%] text-center w-[50%] text-[clamp(0.2rem,3.8vw,1.1rem)] leading-relaxed">
          이제 본격적으로 ㅇㅇ님의 사주팔자를 분석해볼 차례네요.
        </p>
        <p className="absolute top-[49.5%] left-[15%] text-center w-[50%] text-[clamp(0.2rem,3.8vw,1.1rem)] leading-relaxed">
          제가 ㅇㅇ님의 사주를 보기 쉽게 표로 정리했어요.
        </p>
        <div className="absolute top-[66.3%] left-[2.2%] w-[95.7%] aspect-[351/621]">
          <SajuTable />
          {/* <Image
            src="/tableBackground.svg"
            alt="표 배경 이지미"
            fill
            className="object-fill"
          /> */}
          {/* <div className="absolute left-[10%] top-[10%]">ㅇㅇㅇ님의 사주</div>
          <div>1980년 8월 27일 08:10</div>
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1 p-2 sm:p-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-[clamp(0.5rem,2vw,0.8rem)] text-gray-700">
                  天干
                </span>
                <span className="text-[clamp(0.7rem,3vw,1.1rem)] font-semibold">
                  甲
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
