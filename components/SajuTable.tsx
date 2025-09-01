import { sajuData } from "@/constants/sajuData";
import { CellProps, CharacterCellProps } from "@/types/table";
import Image from "next/image";
import React from "react";

const Cell: React.FC<CellProps> = ({ children, className = "" }) => (
  <div
    className={`flex flex-col text-center items-center justify-center ${className}`}
  >
    {children}
  </div>
);

const CharacterCell: React.FC<CharacterCellProps> = ({
  main,
  sub,
  sub2,
  color,
}) => (
  <div
    className={`w-full aspect-square rounded-[1.25rem] flex flex-col items-center justify-center ${color}`}
  >
    <span className="text-[clamp(0.3rem,2vw,0.9rem)]">{sub2}</span>
    <span className="text-[clamp(2rem,5vw,3rem)] font-serif leading-none">
      {main}
    </span>
    <span className="text-[clamp(0.6rem,2vw,1.2rem)]">{sub}</span>
  </div>
);

const SajuTable: React.FC = () => {
  return (
    <div className="relative w-full aspect-[351/621] flex flex-col items-center justify-center">
      <Image
        src="/tableBackground.svg"
        alt="표 배경 이미지"
        fill
        className="object-fill"
      />
      <div className="absolute flex flex-col items-center justify-center w-full h-full gap-[2.5rem]">
        {/* 상단 헤더 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[clamp(1.0rem,4.5vw,1.8rem)] font-[400]">
            {sajuData.header.name}님의 사주
          </h2>
          <p className=" text-[clamp(1.4rem,4.5vw,2.2rem)] font-[700]">
            {sajuData.header.birth}
          </p>
        </div>

        {/* 메인 그리드 */}
        <div className="w-[86%] h-[74%] grid grid-cols-[0.7fr_1fr_1fr_1fr_1fr] grid-rows-[0.8fr_1fr_1fr_0.8fr_0.8fr_0.8fr_1fr] border-r-[0.1rem] border-b-[0.05rem] border-black text-gray-800">
          {/* 표 헤더 (時, 日, 月, 年) */}
          <Cell className="border-r-[0.1rem] border-black border-b-[0.1rem]" />
          {sajuData.columns.map((col) => (
            <Cell
              key={col}
              className="font-bold text-[clamp(1.6rem,4vw,2.1rem)] border-b-[0.1rem] border-b-black border-r-[#8A8A8A] border-r-[0.05rem]"
            >
              {col}
            </Cell>
          ))}

          {/* 표 내용 */}
          {sajuData.rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <Cell className={`${row.titleClassName}` || ""}>
                <span className="font-bold text-[clamp(0.3rem,3vw,1.2rem)]">
                  {row.title[0]}
                </span>
                {row.title[1] && (
                  <span className="text-[clamp(0.5rem,2vw,0.8rem)]">
                    {row.title[1]}
                  </span>
                )}
              </Cell>
              {row.data.map((item, itemIndex) => (
                <Cell key={itemIndex} className={`bg-white ${item.className}`}>
                  {row.isCharacter ? (
                    <CharacterCell
                      main={item.main}
                      sub={item.sub}
                      sub2={item.sub2}
                      color={item.color}
                    />
                  ) : (
                    <>
                      <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.5rem)] ">
                        {item.main}
                      </span>
                      {item.sub && (
                        <span className="text-[clamp(0.7rem,2.5vw,1rem)] ">
                          {item.sub}
                        </span>
                      )}
                      {item.sub2 && (
                        <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.5rem)]">
                          {item.sub2}
                        </span>
                      )}
                      {item.sub3 && (
                        <span className="text-[clamp(0.7rem,2.5vw,1rem)] ">
                          {item.sub3}
                        </span>
                      )}
                      {item.sub4 && (
                        <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.5rem)]">
                          {item.sub4}
                        </span>
                      )}
                      {item.sub5 && (
                        <span className="text-[clamp(0.7rem,2.5vw,1rem)] ">
                          {item.sub5}
                        </span>
                      )}
                    </>
                  )}
                </Cell>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SajuTable;
