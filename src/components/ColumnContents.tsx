import { Flex, Box } from "@kuma-ui/core";
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
  onInputHandler?: () => void;
}
const ColumnContents: React.FC<ColumnContentsProps> = (props) => {
  const {
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    margin = 4,
    padding = 0,
  } = props;

  const tableData = useTableData();
  const data = tableData.data;
  const columns = tableData.columns;
  const dispatchRowData = useTableDispatch();

  return (
    <>
      {data.map((item, itemIndex) => {
        return (
          <Flex key={itemIndex}>
            <PlusIcon
              direction="row"
              onClick={() =>
                dispatchRowData({ type: "ADD_DATA", payload: itemIndex })
              }
            />
            {columns.map((column, columnIndex) => {
              return (
                <Box
                  key={column.id}
                  width={column.width}
                  display={"flex"}
                  justifyContent={justifyContent}
                  bg={columnIndex === 0 ? backgroundColor : ""}
                  m={margin}
                  p={padding}
                  border={border}
                  onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                    dispatchRowData({
                      type: "SET_DATA",
                      payload: {
                        index: itemIndex,
                        value: column.value,
                        innerHtml: e.target.innerHTML,
                      },
                    });
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
