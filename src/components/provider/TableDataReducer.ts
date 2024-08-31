/* eslint react-refresh/only-export-components: 0 */
import { Column, Columns, TableData, DataItem, Data } from "../../types/types";
import { defaultColumn } from "../../lib/util";
import { Dispatch, createContext, useContext } from "react";
type Index = number;

export type Action =
  | { type: "ADD_COLUMN"; payload: Index }
  | {
      type: "SET_COLUMN";
      payload: { index: Index; innerHtml: string };
    }
  | { type: "DELETE_COLUMN"; payload: TableData }
  | { type: "ADD_DATA"; payload: Index }
  | {
      type: "SET_DATA";
      payload: { index: Index; value: string; innerHtml: string };
    }
  | { type: "DELETE_DATA"; payload: TableData };

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
      const value = Math.random() as unknown as string;
      const insertColumn: Column = { ...defaultColumn, id, value };
      const newColumns: Columns = [
        ...columns.slice(0, index),
        insertColumn,
        ...columns.slice(index),
      ];
      const insertColumnRowData: Data = data.map((row) => {
        return { ...row, [id]: "" };
      });
      return { columns: newColumns, data: insertColumnRowData };
    }
    case "SET_COLUMN": {
      const { index, innerHtml } = payload;
      const newColumns = [...columns];
      newColumns[index]["value"] = innerHtml;
      return { columns: newColumns, data };
    }
    case "ADD_DATA": {
      const index = payload;
      const insertRowData: DataItem = columns.reduce((acc, column) => {
        acc[column.value] = "";
        return acc;
      }, {} as DataItem);
      const newData = [
        ...data.slice(0, index),
        insertRowData,
        ...data.slice(index),
      ];
      return { columns, data: newData };
    }
    case "SET_DATA": {
      const { index, value, innerHtml } = payload;
      const newData = [...data];
      newData[index][value] = innerHtml;
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
