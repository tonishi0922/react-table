import { styled } from "@kuma-ui/core";

interface IconContainerProps {
  children?: React.ReactNode;
}

const IconStyleContainer = styled("div")`
  position: relative;
  height: "24px";
`;

const IconContainer: React.FC<IconContainerProps> = (props) => {
  const { children } = props;
  return <IconStyleContainer>{children}</IconStyleContainer>;
};

export default IconContainer;
