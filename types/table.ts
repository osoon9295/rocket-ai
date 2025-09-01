export type SajuItem = {
  main: string;
  sub?: string;
  sub2?: string;
  sub3?: string;
  sub4?: string;
  sub5?: string;
  color?: string;
  className?: string;
};

export type SajuRow = {
  title: [string, string?];
  titleClassName?: string;
  isCharacter?: boolean;
  data: SajuItem[];
};

export type SajuData = {
  header: {
    name: string;
    birth: string;
  };
  columns: string[];
  rows: SajuRow[];
};

export interface CellProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CharacterCellProps {
  main: string;
  sub?: string;
  sub2?: string;
  color?: string;
}
