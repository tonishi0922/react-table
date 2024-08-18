const baseIconStyle = {
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
  transitionProperty: "opacity",
  transitionDuration: "0.2s",
  ":hover": {
    opacity: 1,
  },
};

export const columnIconStyle = {
  top: "-20px",
  left: "-12px",
  ...baseIconStyle,
};

export const rowIconStyle = {
  top: "-12px",
  left: "-20px",
  ...baseIconStyle,
};
