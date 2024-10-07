const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid #3399ff",
        display: "flex",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#3399ff" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "#3399ff",
          color: "black",
        },
        width: "22%",
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
