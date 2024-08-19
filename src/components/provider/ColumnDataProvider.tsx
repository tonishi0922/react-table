import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Columns } from "../../types/types";
import { defaultColumnData } from "../../utils/data";

interface ColumnDataState {
  columns: Columns;
  setColumns: Dispatch<SetStateAction<Columns>>;
}

interface ColumnDataProps {
  /**
   * ColumDataProviderが受け取る初期値
   * 未定義の場合デフォルトで
   * [{ value: "", required: true, unique: true, width: 100 }]
   * が出力される
   */
  provideColumns: Columns;
  /**
   * children
   */
  children: React.ReactNode;
}

export const columnDataContext = createContext<ColumnDataState>({
  columns: defaultColumnData,
  setColumns: () => undefined,
});

const ColumnDataProvider: React.FC<ColumnDataProps> = (props) => {
  const { children, provideColumns } = props;
  const [columns, setColumns] = useState<Columns>(provideColumns);
  return (
    <columnDataContext.Provider value={{ columns, setColumns }}>
      {children}
    </columnDataContext.Provider>
  );
};

export default ColumnDataProvider;
