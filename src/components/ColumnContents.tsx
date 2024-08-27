import { Dispatch, SetStateAction } from "react";
import { Flex, Box } from "@kuma-ui/core";
import type { Data } from "../types/types";
import PlusIcon from "./PlusIcon/PlusIcon";
import { useTableData } from "./provider/TableDataContext";
import { useTableDispatch } from "./provider/TableDataReducer";

interface ColumnContentsProps {
  justifyContent?: "start" | "center" | "end";
  /**
   * background-color
   */
  backgroundColor?: string;
  /**
   * border
   */
  border?: string;
  /**
   * margin
   * @default 4
   */
  margin?: number | string;
  /**
   * padding
   * @default 0
   */
  padding?: number | string;
  /**
   * box編集時のイベントハンドラ
   */
  onInputHandler?: Dispatch<SetStateAction<Data>>;
}
const ColumnContents: React.FC<ColumnContentsProps> = (props) => {
  const {
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    margin = 4,
    padding = 0,
    onInputHandler = () => undefined,
  } = props;

  const tableData = useTableData();
  const addRowData = useTableDispatch();
  const data = tableData.data;
  const columns = tableData.columns;

  return (
    <>
      {data.map((item, itemIndex) => {
        return (
          <Flex key={itemIndex}>
            <PlusIcon
              direction="row"
              onClick={() =>
                addRowData({ type: "ADD_DATA", payload: itemIndex })
              }
            />
            {columns.map((column, columnIndex) => {
              return (
                <Box
                  key={columnIndex}
                  width={column.width}
                  display={"flex"}
                  justifyContent={justifyContent}
                  bg={columnIndex === 0 ? backgroundColor : ""}
                  m={margin}
                  p={padding}
                  border={border}
                  onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                    const tmpData = [...data];
                    tmpData[itemIndex][column.value] = e.target.innerHTML;
                    onInputHandler(tmpData);
                  }}
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  dangerouslySetInnerHTML={{ __html: item[column.value] }}
                ></Box>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};

export default ColumnContents;
