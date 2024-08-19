import { Columns } from "../../types/types";
import { defaultColumnData } from "../../lib/util";
type Index = number;

export type Action =
  | { type: "ADD"; payload: Index }
  | { type: "DELETE"; payload: Index };

export const columnsReducer = (columns: Columns, action: Action): Columns => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
  }
  return columns;
};
