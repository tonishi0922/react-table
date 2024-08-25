import { useReducer } from "react";
import { Columns, Data } from "../../types/types";
import { columnContext } from "./ColumnDataContext";
import { columnsReducer, ColumnsDispatchContext } from "./ColumnDataReducer";
import { dataContext } from "./RowDataContext";
import { dataReducer, DataDispatchContext } from "./RowDataReducer";

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
  /**
   * カラム以外に表示されるコンテンツ
   */
  data: Data;
  /**
   * Provider配下のchildren
   */
  children: React.ReactNode;
}

const ColumnDataProvider: React.FC<ColumnDataProps> = (props) => {
  const [columns, columnsDispatch] = useReducer(columnsReducer, props.columns);
  const [data, dataDispatch] = useReducer(dataReducer, props.data);
  return (
    <columnContext.Provider value={columns}>
      <dataContext.Provider value={data}>
        <ColumnsDispatchContext.Provider value={columnsDispatch}>
          <DataDispatchContext.Provider value={dataDispatch}>
            {props.children}
          </DataDispatchContext.Provider>
        </ColumnsDispatchContext.Provider>
      </dataContext.Provider>
    </columnContext.Provider>
  );
};

export default ColumnDataProvider;
