import { useReducer } from "react";
import { Columns } from "../../types/types";
import { columnContext } from "./ColumnDataContext";
import { columnsReducer, ColumnsDispatchContext } from "./ColumnDataReducer";

interface ColumnDataProps {
  /**
   * 1行目のカラムに関する型定義
   * value: 各カラムに出力される文字列
   * required: 空を許容するか
   * unique: 重複を許容するか
   * width: 幅
   */
  columns: Columns;
  /**
   * children
   */
  children: React.ReactNode;
}

const ColumnDataProvider: React.FC<ColumnDataProps> = (props) => {
  const [columns, columnsDispatch] = useReducer(columnsReducer, props.columns);
  return (
    <columnContext.Provider value={columns}>
      <ColumnsDispatchContext.Provider value={columnsDispatch}>
        {props.children}
      </ColumnsDispatchContext.Provider>
    </columnContext.Provider>
  );
};

export default ColumnDataProvider;
