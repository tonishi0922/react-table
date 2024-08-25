export interface Column {
  id: string | number;
  value: string;
  required?: boolean;
  unique?: boolean;
  width: string | number;
}

export type Columns = Column[];

type ColumnNames = Columns[number]["value"];

// export type DataItem = Record<ColumnNames, string | number>;

export type DataItem = {
  [K in Column["value"]]: string | number;
};

export type Data = DataItem[];
