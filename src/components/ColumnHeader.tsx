import { Dispatch, SetStateAction } from "react";
import { Flex, Box, styled } from "@kuma-ui/core";
import type { Columns } from "../types/types";
import AddIcon from "@mui/icons-material/Add";
import { keyframes } from "@emotion/react";

interface ColumnHeaderProps {
  /**
   * 1行目のカラムに関する型定義
   * value: 各カラムに出力される文字列
   * required: 空を許容するか
   * unique: 重複を許容するか
   * width: 幅
   */
  columns: Columns;
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
  onInputHandler: Dispatch<SetStateAction<Columns>>;
}

const IconStyleContainer = styled("div")`
  position: relative;
  height: "24px";
`;

const ColumnHeader: React.FC<ColumnHeaderProps> = (props) => {
  const {
    columns,
    justifyContent = "center",
    backgroundColor = "#F5F5F5",
    border = "1px solid gray",
    margin = 4,
    padding = 0,
    onInputHandler,
  } = props;
  return (
    <>
      <Flex>
        {columns.map((column, index) => {
          return (
            <div key={index}>
              <IconStyleContainer>
                {/* <IconStyle> */}
                <AddIcon
                  style={index === 0 ? { display: "none" } : {}}
                  sx={{
                    position: "absolute",
                    left: "-12px",
                    top: "-20px",
                    opacity: 0,
                    cursor: "pointer",
                    transitionProperty: "opacity",
                    transitionDuration: "0.2s",
                    ":hover": {
                      opacity: 1,
                    },
                    // animation: {sh}
                  }}
                />
                {/* </IconStyle> */}
              </IconStyleContainer>
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
