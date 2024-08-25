export interface Column {
  id: string | number;
  value: string;
  required?: boolean;
  unique?: boolean;
  width: string | number;
}

export type Columns = Column[];

export type DataItem = {
  [K in Column["value"]]: string | number;
};

export type Data = DataItem[];

export interface TableData {
  columns: Columns;
  data: Data;
}
