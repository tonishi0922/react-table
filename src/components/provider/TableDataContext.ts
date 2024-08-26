/* eslint react-refresh/only-export-components: 0 */
import { TableData } from "../../types/types";
import { defaultColumns, defaultData } from "../../lib/util";
import { createContext, useContext } from "react";

const tableData: TableData = {
  columns: defaultColumns,
  data: defaultData,
};

export const tableDataContext = createContext<TableData>(tableData);
export const useTableData = () => useContext(tableDataContext);
