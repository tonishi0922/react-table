export interface Column {
  id: string | number;
  value: string;
  required?: boolean;
  unique?: boolean;
  width: string | number;
}

export type Columns = Column[];

type ColumnNames = Columns[number]["value"];

type DataItem = Record<ColumnNames, string | number>;

export type Data = DataItem[];
