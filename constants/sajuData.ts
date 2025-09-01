import { SajuData } from "@/types/table";

// 사주 데이터
export const sajuData: SajuData = {
  header: {
    name: "김로켓",
    birth: "1980년 8월 27일 08:10",
  },
  columns: ["時", "日", "月", "年"],
  rows: [
    {
      title: ["十星", "(십성)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      data: [
        {
          main: "傷官",
          sub: "(상관)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "比肩",
          sub: "(비견)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "傷官",
          sub: "(상관)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "傷官",
          sub: "(상관)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
      ],
    },
    {
      title: ["天干", "(천간)"],
      titleClassName:
        "border-r-[0.1rem] border-b-[0.05rem] border-black border-b-[#9B9B9B]",
      isCharacter: true,
      data: [
        {
          main: "壬",
          sub: "陰水",
          sub2: "임",
          color: "bg-[#2F2F2F] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.05rem] p-2",
        },
        {
          main: "丁",
          sub: "陰火",
          sub2: "정",
          color: "bg-[#C23030] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.05rem] p-2",
        },
        {
          main: "癸",
          sub: "陰水",
          sub2: "계",
          color: "bg-[#2F2F2F] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.05rem] p-2",
        },
        {
          main: "癸",
          sub: "陰水",
          sub2: "계",
          color: "bg-[#2F2F2F] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.05rem] p-2 ",
        },
      ],
    },
    {
      title: ["地支", "(지지)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      isCharacter: true,
      data: [
        {
          main: "寅",
          sub: "陽木",
          sub2: "인",
          color: "bg-[#18868C] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem] p-2",
        },
        {
          main: "巳",
          sub: "陰火",
          sub2: "사",
          color: "bg-[#C23030] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem] p-2",
        },
        {
          main: "亥",
          sub: "陰水",
          sub2: "해",
          color: "bg-[#2F2F2F] text-white",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem] p-2",
        },
        {
          main: "酉",
          sub: "陽金",
          sub2: "유",
          color: "bg-white text-black border-black border-[0.1rem]",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem] p-2",
        },
      ],
    },
    {
      title: ["十星", "(십성)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      data: [
        {
          main: "比肩",
          sub: "(비견)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "劫財",
          sub: "(겁재)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "食神",
          sub: "(식신)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "偏財",
          sub: "(편재)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
      ],
    },
    {
      title: ["十二運星", "(십이운성)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      data: [
        {
          main: "死",
          sub: "(사)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "帝旺",
          sub: "(제왕)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "胎",
          sub: "(태)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "長生",
          sub: "(장생)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
      ],
    },
    {
      title: ["十二神殺", "(십이신살)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      data: [
        {
          main: "劫殺",
          sub: "(겁살)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "地殺",
          sub: "(지살)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "驛馬殺",
          sub: "(역마살)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "將星殺",
          sub: "(장성살)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
      ],
    },
    {
      title: ["貴人", "(귀인)"],
      titleClassName: "border-r-[0.1rem] border-b-[0.1rem] border-black",
      data: [
        {
          main: "(없음)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "(없음)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "天乙",
          sub: "(천을귀인)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
        {
          main: "天乙",
          sub: "(천을귀인)",
          sub2: "太極",
          sub3: "(태극귀인)",
          sub4: "文昌",
          sub5: "(문창귀인)",
          className:
            "border-b-black border-r-[#8A8A8A] border-r-[0.05rem] border-b-[0.1rem]",
        },
      ],
    },
  ],
};
