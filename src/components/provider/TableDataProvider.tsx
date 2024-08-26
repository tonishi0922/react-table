import { useReducer } from "react";
import { TableData } from "../../types/types";
import { tableDataContext } from "./TableDataContext";
import { tableDataReducer, TableDataDispatchContext } from "./TableDataReducer";

interface TableDataProps {
  /**
   * @type TableData
   * 表形式のデータを表現するインターフェース
   * columns プロパティに列に関する情報、data プロパティに実際のデータ本体を格納
   */
  tableData: TableData;
  /**
   * Provider配下のchildren
   */
  children: React.ReactNode;
}

const TableDataProvider: React.FC<TableDataProps> = (props) => {
  const [tableData, tableDataDispatch] = useReducer(
    tableDataReducer,
    props.tableData
  );
  return (
    <tableDataContext.Provider value={tableData}>
      <TableDataDispatchContext.Provider value={tableDataDispatch}>
        {props.children}
      </TableDataDispatchContext.Provider>
    </tableDataContext.Provider>
  );
};

export default TableDataProvider;
