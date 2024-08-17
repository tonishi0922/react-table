import { testData, testColumns, Data } from "./fixture/testData";
import { Columns } from "./types/types";

import { useState } from "react";

import ColumnHeader from "./components/ColumnHeader";
import ColumnContents from "./components/ColumnContents";
import Table from "./components/Table";

function App() {
  const [columns, setColumns] = useState<Columns>(testColumns);
  const [data, setData] = useState<Data>(testData);
  return (
    <>
      <Table columns={columns} data={data} margin={24} />
    </>
  );
}

export default App;
