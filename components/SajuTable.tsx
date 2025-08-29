// components/SajuTable.tsx
import Image from "next/image";
import React from "react";

// 타입 정의
type SajuItem = {
  main: string;
  sub?: string;
  sub2?: string;
  sub3?: string;
  sub4?: string;
  sub5?: string;
  color?: string;
};

type SajuRow = {
  title: [string, string?];
  isCharacter?: boolean;
  data: SajuItem[];
};

type SajuData = {
  header: {
    name: string;
    birth: string;
  };
  columns: string[];
  rows: SajuRow[];
};

// 표에 들어갈 데이터 예시
const sajuData: SajuData = {
  header: {
    name: "김로켓",
    birth: "1980년 8월 27일 08:10",
  },
  columns: ["時", "日", "月", "年"],
  rows: [
    {
      title: ["十星", "(십성)"],
      data: [
        { main: "傷官", sub: "(상관)" },
        { main: "比肩", sub: "(비견)" },
        { main: "傷官", sub: "(상관)" },
        { main: "傷官", sub: "(상관)" },
      ],
    },
    {
      title: ["天干", "(천간)"],
      isCharacter: true,
      data: [
        { main: "壬", sub: "陰水", color: "bg-gray-800 text-white" },
        { main: "丁", sub: "陰火", color: "bg-red-600 text-white" },
        { main: "癸", sub: "陰水", color: "bg-gray-800 text-white" },
        { main: "癸", sub: "陰水", color: "bg-gray-800 text-white" },
      ],
    },
    {
      title: ["地支", "(지지)"],
      isCharacter: true,
      data: [
        { main: "寅", sub: "陽木", color: "bg-teal-500 text-white" },
        { main: "巳", sub: "陰火", color: "bg-red-600 text-white" },
        { main: "亥", sub: "陰水", color: "bg-gray-800 text-white" },
        { main: "酉", sub: "陽金", color: "bg-white text-black border" },
      ],
    },
    {
      title: ["十星", "(십성)"],
      data: [
        { main: "比肩", sub: "(비견)" },
        { main: "劫財", sub: "(겁재)" },
        { main: "食神", sub: "(식신)" },
        { main: "偏財", sub: "(편재)" },
      ],
    },
    {
      title: ["十二運星", "(십이운성)"],
      data: [
        { main: "死", sub: "(사)" },
        { main: "帝旺", sub: "(제왕)" },
        { main: "胎", sub: "(태)" },
        { main: "長生", sub: "(장생)" },
      ],
    },
    {
      title: ["十二神殺", "(십이신살)"],
      data: [
        { main: "劫殺", sub: "(겁살)" },
        { main: "地殺", sub: "(지살)" },
        { main: "驛馬殺", sub: "(역마살)" },
        { main: "將星殺", sub: "(장성살)" },
      ],
    },
    {
      title: ["貴人", "(귀인)"],
      data: [
        { main: "없음" },
        { main: "없음" },
        { main: "天乙", sub: "(천을귀인)" },
        {
          main: "天乙",
          sub: "(천을귀인)",
          sub2: "太極",
          sub3: "(태극귀인)",
          sub4: "文昌",
          sub5: "(문창귀인)",
        },
      ],
    },
  ],
};

// Cell 컴포넌트의 props 타입
interface CellProps {
  children?: React.ReactNode;
  className?: string;
}

const Cell: React.FC<CellProps> = ({ children, className = "" }) => (
  <div
    className={`flex flex-col text-center items-center justify-center border-b border-r border-gray-400 ${className}`}
  >
    {children}
  </div>
);

// CharacterCell 컴포넌트의 props 타입
interface CharacterCellProps {
  main: string;
  sub?: string;
  color?: string;
}

const CharacterCell: React.FC<CharacterCellProps> = ({ main, sub, color }) => (
  <div
    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex flex-col items-center justify-center ${color}`}
  >
    <span className="text-[clamp(1.5rem,5vw,2rem)] font-serif leading-none">
      {main}
    </span>
    {sub && <span className="text-[clamp(0.6rem,2vw,0.7rem)]">{sub}</span>}
  </div>
);

const SajuTable: React.FC = () => {
  return (
    <div className="relative w-full aspect-[351/621] flex flex-col items-center justify-center">
      <Image
        src="/tableBackground.svg"
        alt="표 배경 이지미"
        fill
        className="object-fill"
      />
      {/* 상단 헤더 */}
      <div className="absolute flex flex-col items-center">
        <h2 className="text-[clamp(0.5rem,3.8vw,1rem)] ">
          {sajuData.header.name}님의 사주
        </h2>
        <p className=" text-[clamp(0.6rem,3.8vw,1.3rem)] font-bold">
          {sajuData.header.birth}
        </p>
      </div>

      {/* 메인 그리드 */}
      <div className="absolute grid grid-cols-[0.7fr_1fr_1fr_1fr_1fr] border-t border-l border-gray-400 text-gray-800 bg-red-50">
        {/* 표 헤더 (時, 日, 月, 年) */}
        <Cell />
        {sajuData.columns.map((col) => (
          <Cell key={col} className="font-bold text-[clamp(1rem,4vw,1.2rem)]">
            {col}
          </Cell>
        ))}

        {/* 표 내용 */}
        {sajuData.rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Cell>
              <span className="font-bold text-[clamp(0.8rem,3vw,1rem)]">
                {row.title[0]}
              </span>
              {row.title[1] && (
                <span className="text-[clamp(0.7rem,2vw,0.8rem)] text-gray-500">
                  {row.title[1]}
                </span>
              )}
            </Cell>
            {row.data.map((item, itemIndex) => (
              <Cell key={itemIndex}>
                {row.isCharacter ? (
                  <CharacterCell
                    main={item.main}
                    sub={item.sub}
                    color={item.color}
                  />
                ) : (
                  <>
                    <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.1rem)]">
                      {item.main}
                    </span>
                    {item.sub && (
                      <span className="text-[clamp(0.7rem,2.5vw,0.8rem)] text-gray-500">
                        {item.sub}
                      </span>
                    )}
                    {item.sub2 && (
                      <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.1rem)]">
                        {item.sub2}
                      </span>
                    )}
                    {item.sub3 && (
                      <span className="text-[clamp(0.7rem,2.5vw,0.8rem)] text-gray-500">
                        {item.sub3}
                      </span>
                    )}
                    {item.sub4 && (
                      <span className="font-semibold text-[clamp(0.9rem,3.5vw,1.1rem)]">
                        {item.sub4}
                      </span>
                    )}
                    {item.sub5 && (
                      <span className="text-[clamp(0.7rem,2.5vw,0.8rem)] text-gray-500">
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
  );
};

export default SajuTable;
