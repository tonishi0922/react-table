import { Dispatch, SetStateAction } from "react";
import { Flex, Box } from "@kuma-ui/core";
import type { Columns } from "../types/types";
import PlusIcon from "./PlusIcon/PlusIcon";
import { useTableData } from "./provider/TableDataContext";
import { useTableDispatch } from "./provider/TableDataReducer";

interface ColumnHeaderProps {
  /**
   * 表示方法: 左寄せ | 中央 | 右寄せ
   */
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
  onInputHandler?: Dispatch<SetStateAction<Columns>>;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = (props) => {
  const {
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    margin = 4,
    padding = 0,
    onInputHandler = () => undefined,
  } = props;
  const tableData = useTableData();
  const addColumnData = useTableDispatch();
  const columns = tableData.columns;
  return (
    <>
      <Flex>
        {columns.map((column, index) => {
          return (
            <div key={index}>
              <PlusIcon
                hideIcon={index === 0}
                direction="column"
                onClick={() =>
                  addColumnData({ type: "ADD_COLUMN", payload: index })
                }
              />
              <Box
                width={column.width}
                display={"flex"}
                justifyContent={justifyContent}
                bg={backgroundColor}
                border={border}
                m={margin}
                p={padding}
                onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                  const tmpColums = [...columns];
                  tmpColums[index]["value"] = e.target.innerHTML;
                  onInputHandler(tmpColums);
                }}
                contentEditable={true}
                suppressContentEditableWarning={true}
                dangerouslySetInnerHTML={{ __html: column.value }}
              ></Box>
            </div>
          );
        })}
      </Flex>
    </>
  );
};

export default ColumnHeader;
