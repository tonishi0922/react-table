import { DataItem, Data } from "../../types/types";
import { Dispatch, createContext, useContext } from "react";
import { useColumns } from "./ColumnDataContext";
type Index = number;

export type Action =
  | { type: "ADD"; payload: Index }
  | { type: "DELETE"; payload: Data };

export const dataReducer = (data: Data, action: Action) => {
  const columns = useColumns();
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      const insertRowData: DataItem = columns.reduce((acc, column) => {
        acc[column.value] = "";
        return acc;
      }, {} as DataItem);
      const index = payload;
      return [...data.slice(0, index), insertRowData, ...data.slice(index)];
    }
    default:
      throw new Error("Invalid action");
  }
};

export const DataDispatchContext = createContext<Dispatch<Action>>(
  () => undefined
);
export const useDataDispatch = () => useContext(DataDispatchContext);
