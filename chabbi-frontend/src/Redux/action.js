export const setData = (props) => {
  return {
    type: "CHANGE",
    data: props,
  };
};

export const resetData = () => {
  return {
    type: "RESET",
  };
};
