import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Columns } from "../../types/types";
import { defaultColumns } from "../../lib/util";

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

const columnContext = createContext<Columns>(defaultColumns);
export const useColumns = () => useContext(columnContext);
export const setColumnContext = createContext<
  Dispatch<SetStateAction<Columns>>
>(() => undefined);

const ColumnDataProvider: React.FC<ColumnDataProps> = (props) => {
  const [columns, setColumns] = useState<Columns>(props.columns);
  return (
    <columnContext.Provider value={columns}>
      <setColumnContext.Provider value={setColumns}>
        {props.children}
      </setColumnContext.Provider>
    </columnContext.Provider>
  );
};

export default ColumnDataProvider;
