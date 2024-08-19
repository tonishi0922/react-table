export const testColumns = [
  { id: 111, value: "id", required: true, unique: true, width: 180 },
  { id: 112, value: "name", required: true, unique: true, width: 100 },
  { id: 113, value: "age", required: true, unique: true, width: 100 },
  { id: 114, value: "department", required: true, unique: true, width: 180 },
];

type ColumnNames = (typeof testColumns)[number]["value"];

type DataItem = Record<ColumnNames, string | number>;

export type Data = DataItem[];

export const testData: Data = [
  {
    id: "878543",
    name: "Tom Brown",
    age: 38,
    department: "営業",
  },
  {
    id: "983985",
    name: "山田 太郎",
    age: 23,
    department: "カスタマーサポート",
  },
  {
    id: "095989",
    name: "Jonny",
    age: 50,
    department: "生産管理",
  },
  {
    id: "989982",
    name: "佐藤花子",
    age: 43,
    department: "商品開発部",
  },
  {
    id: "498083",
    name: "Tim",
    age: 36,
    department: "営業",
  },
];
