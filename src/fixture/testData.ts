interface Column {
  name: string;
  required?: boolean;
  unique?: boolean;
  width?: string | number;
}

type Columns = Column[];

export const columns = [
  { name: "name", required: true, unique: true, width: 180 },
  { name: "x", required: true, unique: true, width: 100 },
  { name: "y", required: true, unique: true, width: 100 },
  { name: "color", required: true, unique: true, width: 180 },
] as const;

type ColumnNames = (typeof columns)[number]["name"];

type DataItem = Record<ColumnNames, string | number | boolean>;

type Data = DataItem[];

export const data: Data = [
  {
    name: "",
    x: 4.31,
    y: 0.95,
    color: "red",
  },
  {
    name: "point_2",
    x: 0.2,
    y: 4.24,
    color: "red",
  },
  {
    name: "point_3",
    x: 9.78,
    y: 9.43,
    color: "red",
  },
  {
    name: "point_4",
    x: 0.7,
    y: 8.64,
    color: "red",
  },
];
