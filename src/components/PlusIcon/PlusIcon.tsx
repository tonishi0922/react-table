import { styled } from "@kuma-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { columnIconStyle, rowIconStyle } from "./baseStyles";

interface PlusIconProps {
  /**
   * Iconを表示するか
   */
  hideIcon?: boolean;
  /**
   * plus iconを表示する方向
   */
  direction?: "column" | "row";
  /**
   * Icon(button要素)クリック時のイベントハンドラ
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconStyleContainer = styled("div")`
  position: relative;
  height: "24px";
`;

const buttonStyle = {
  padding: 0,
  border: 0,
  display: "block",
};

const PlusIcon: React.FC<PlusIconProps> = (props) => {
  const { hideIcon = false, direction = "column", onClick } = props;
  const iconStle = direction === "column" ? columnIconStyle : rowIconStyle;
  return (
    <IconStyleContainer>
      <button style={buttonStyle} onClick={onClick}>
        <AddIcon style={hideIcon ? { display: "none" } : {}} sx={iconStle} />
      </button>
    </IconStyleContainer>
  );
};

export default PlusIcon;
