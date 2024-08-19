import { useState } from "react";
import { Box } from "@kuma-ui/core";
import type { Columns, Data } from "../types/types";

import ColumnHeader from "./ColumnHeader";
import ColumnContents from "./ColumnContents";

import ColumnDataProvider from "./provider/ColumnDataProvider";

export interface TableProps {
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
   * gap
   * @default 4
   */
  gap?: number | string;
  /**
   * margin
   * @default 0
   */
  margin?: number | string;
  /**
   * padding
   * @default 0
   */
  padding?: number | string;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    columns,
    data,
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    gap = 4,
    margin = 20,
    padding = 0,
  } = props;
  const [tableColumns, setColumns] = useState<Columns>(columns);
  const [tableData, setData] = useState<Data>(data);
  return (
    <>
      <ColumnDataProvider columns={columns}>
        <Box m={margin}>
          <ColumnHeader
            justifyContent={justifyContent}
            backgroundColor={backgroundColor}
            border={border}
            margin={gap}
            padding={padding}
            onInputHandler={setColumns}
          />
          <ColumnContents
            columns={tableColumns}
            data={tableData}
            justifyContent={justifyContent}
            backgroundColor={backgroundColor}
            border={border}
            margin={gap}
            padding={padding}
            onInputHandler={setData}
          />
        </Box>
      </ColumnDataProvider>
    </>
  );
};

export default Table;
