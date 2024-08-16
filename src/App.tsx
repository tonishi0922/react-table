import { testData, testColumns, Columns, Data } from "./fixture/testData";

import { Flex, Box } from "@kuma-ui/core";
import { useState } from "react";

function App() {
  const [columns, setColumn] = useState<Columns>(testColumns);
  const [data, setData] = useState<Data>(testData);
  return (
    <>
      <Flex>
        {columns.map((column, index) => {
          return (
            <div key={index}>
              <Box
                width={column.width}
                display={"flex"}
                justifyContent={"center"}
                bg={"#F5F5F5"}
                border={"1px solid gray"}
                m={4}
                onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                  const tmpColumn = [...columns];
                  tmpColumn[index].name = e.target.innerHTML;
                  setColumn(testColumns);
                }}
                contentEditable={true}
                suppressContentEditableWarning={true}
                dangerouslySetInnerHTML={{ __html: column.name }}
              ></Box>
            </div>
          );
        })}
      </Flex>
      {data.map((item, itemIndex) => {
        return (
          <div key={itemIndex}>
            <Flex>
              {columns.map((column, columnIndex) => {
                return (
                  <Box
                    key={columnIndex}
                    width={column.width}
                    display={"flex"}
                    justifyContent={"center"}
                    bg={columnIndex === 0 ? "#F5F5F5" : ""}
                    m={4}
                    border={"1px solid gray"}
                    onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                      const tmpData = [...data];
                      tmpData[itemIndex][column.name] = e.target.innerHTML;
                      setData(tmpData);
                    }}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    dangerouslySetInnerHTML={{ __html: item[column.name] }}
                  ></Box>
                );
              })}
            </Flex>
          </div>
        );
      })}
    </>
  );
}

export default App;
