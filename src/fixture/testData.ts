export const testColumns = [
  { value: "name", required: true, unique: true, width: 180 },
  { value: "x", required: true, unique: true, width: 100 },
  { value: "y", required: true, unique: true, width: 100 },
  { value: "color", required: true, unique: true, width: 180 },
];

const testColumnsForType = [...testColumns] as const;

export type Columns = typeof testColumnsForType;

type ColumnNames = (typeof testColumns)[number]["value"];

type DataItem = Record<ColumnNames, string | number>;

export type Data = DataItem[];

export const testData: Data = [
  {
    name: "point_1",
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
