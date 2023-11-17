export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `squere ${isSelected ? "is-selected" : ""}`;
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div onCLick={handleClick} className={className}>
        {children}
      </div>
    );
  };