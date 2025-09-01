import SajuTable from "@/components/SajuTable";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[44.8rem] aspect-[375/2081]">
        <Image
          src="/frontend-source.svg"
          alt="기본 이미지"
          fill
          className="object-contain"
        />
        <p className="absolute top-[32.2%] left-[10%] text-center w-[50%] text-[clamp(1.0rem,3.8vw,1.8rem)] leading-relaxed">
          이제 본격적으로 ㅇㅇ님의 사주팔자를 분석해볼 차례네요.
        </p>
        <p className="absolute top-[49.5%] left-[15%] text-center w-[50%] text-[clamp(1.0rem,3.8vw,1.8rem)] leading-relaxed">
          제가 ㅇㅇ님의 사주를 보기 쉽게 표로 정리했어요.
        </p>
        <div className="absolute top-[66.16%] left-[2.2%] w-[95.7%] aspect-[351/621]">
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
