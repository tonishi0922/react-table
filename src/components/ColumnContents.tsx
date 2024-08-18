import { Dispatch, SetStateAction } from "react";
import { Flex, Box } from "@kuma-ui/core";
import type { Columns, Data } from "../types/types";
import PlusIcon from "./PlusIcon/PlusIcon";

interface ColumnContentsProps {
  /**
   * 1行目のカラムに関する型定義
   * value: 各カラムに出力される文字列
   * required: 空を許容するか
   * unique: 重複を許容するか
   * width: 幅
   */
  columns: Columns;
  /**
   * カラム以外に表示されるコンテンツ
   */
  data: Data;
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
  onInputHandler: Dispatch<SetStateAction<Data>>;
}
const ColumnContents: React.FC<ColumnContentsProps> = (props) => {
  const {
    columns,
    data,
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    margin = 4,
    padding = 0,
    onInputHandler,
  } = props;
  return data.map((item, itemIndex) => {
    return (
      <div key={itemIndex}>
        <Flex>
          <PlusIcon direction="row" />
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
      </div>
    );
  });
};

export default ColumnContents;
