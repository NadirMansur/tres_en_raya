export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `${isSelected ? "isSelected" : "square"}`;
  const handleClick = () => {
    updateBoard(index);
  };
  //console.log("consologueando children",children);
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};


