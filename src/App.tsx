import { testData, testColumns } from "./fixture/testData";

import Table from "./components/Table";

function App() {
  return (
    <>
      <Table columns={testColumns} data={testData} margin={24} />
    </>
  );
}

export default App;
