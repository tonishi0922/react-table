type data = Object[];
type columns = Object[];
import { data, columns } from "./fixture/testData";
import { Flex, Box } from "@kuma-ui/core";

function App() {
  return (
    <>
      <Flex>
        {columns.map((column) => {
          return (
            <>
              <Box
                width={column.width}
                display={"flex"}
                justifyContent={"center"}
              >
                {column.name}
              </Box>
            </>
          );
        })}
      </Flex>
      {data.map((item) => {
        return (
          <>
            <Flex>
              {columns.map((column) => {
                return (
                  <Box
                    width={column.width}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {item[column.name]}
                  </Box>
                );
              })}
            </Flex>
          </>
        );
      })}
    </>
  );
}

export default App;
