import chroma from "chroma-js";

export const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color ?? "black");
    return {
      ...styles,
      backgroundColor: isFocused ? color.alpha(0.1).css() : undefined,
      color: data.color,

      ":active": {
        ...styles[":active"],
        backgroundColor: data.color,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color ?? "black");
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
