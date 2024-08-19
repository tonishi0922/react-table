import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Columns } from "../../types/types";

type ContextColumns = Columns | null;

interface ColumnDataState {
  columns: ContextColumns;
  setColumns: Dispatch<SetStateAction<ContextColumns>>;
}

interface ColumnDataProps {
  children: React.ReactNode;
}

const columnDataContext = createContext<ColumnDataState>({
  columns: null,
  setColumns: () => undefined,
});

const ColumnDataProvider: React.FC<ColumnDataProps> = (props) => {
  const { children } = props;
  const [columns, setColumns] = useState<ContextColumns>(null);
  return (
    <columnDataContext.Provider value={{ columns, setColumns }}>
      {children}
    </columnDataContext.Provider>
  );
};

export default ColumnDataProvider;
