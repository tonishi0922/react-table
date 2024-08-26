/* eslint react-refresh/only-export-components: 0 */
import { Column, Columns, TableData, DataItem } from "../../types/types";
import { defaultColumn } from "../../lib/util";
import { Dispatch, createContext, useContext } from "react";
type Index = number;

export type Action =
  | { type: "ADD_COLUMN"; payload: Index }
  | { type: "ADD_DATA"; payload: Index }
  | { type: "DELETE_COLUMN"; payload: TableData }
  | { type: "DELETE_DARA"; payload: TableData };

export const tableDataReducer = (
  tableData: TableData,
  action: Action
): TableData => {
  const { type, payload } = action;
  const { columns, data } = tableData;
  switch (type) {
    case "ADD_COLUMN": {
      const index = payload;
      const id = Math.random() as unknown as string;
      const insertColumn: Column = { ...defaultColumn, id };
      const newColumns: Columns = [
        ...columns.slice(0, index),
        insertColumn,
        ...columns.slice(index),
      ];
      return { columns: newColumns, data };
    }
    case "ADD_DATA": {
      const insertRowData: DataItem = columns.reduce((acc, column) => {
        acc[column.value] = "";
        return acc;
      }, {} as DataItem);
      const index = payload;
      const newData = [
        ...data.slice(0, index),
        insertRowData,
        ...data.slice(index),
      ];
      return { columns, data: newData };
    }
    default:
      throw new Error("Invalid action");
  }
};

export const TableDataDispatchContext = createContext<Dispatch<Action>>(
  () => undefined
);
export const useTableDispatch = () => useContext(TableDataDispatchContext);
