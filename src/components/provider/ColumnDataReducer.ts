import { Column, Columns } from "../../types/types";
import { defaultColumn } from "../../lib/util";
import { Dispatch, createContext, useContext } from "react";
type Index = number;

export type Action =
  | { type: "ADD"; payload: Index }
  | { type: "DELETE"; payload: Column };

export const columnsReducer = (columns: Columns, action: Action): Columns => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const index = payload;
      const id = Math.random() as unknown as string;
      const insertColumn: Column = { ...defaultColumn, id };
      console.log(insertColumn, "insertColumn");
      return [
        ...columns.slice(0, index),
        insertColumn,
        ...columns.slice(index),
      ];
  }
  return columns;
};

export const ColumnsDispatchContext = createContext<Dispatch<Action>>(
  () => undefined
);
export const useColumnsDispatch = () => useContext(ColumnsDispatchContext);
