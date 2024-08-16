import { testData, testColumns, Data } from "./fixture/testData";
import { Columns } from "./types/types";

import { useState } from "react";

import ColumnHeader from "./components/ColumnHeader";
import ColumnContents from "./components/ColumnContents";

function App() {
  const [columns, setColumns] = useState<Columns>(testColumns);
  const [data, setData] = useState<Data>(testData);
  return (
    <>
      <ColumnHeader columns={columns} onInputHandler={setColumns} />
      <ColumnContents columns={columns} data={data} onInputHandler={setData} />
    </>
  );
}

export default App;
