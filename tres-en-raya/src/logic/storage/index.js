export const saveGameToStorage = (  newBoard, newTurn ) => {
        //guardar partida
        window.localStorage.setItem("board", JSON.stringify(newBoard));
        window.localStorage.setItem("turn", newTurn);
};

export const restoreGameStorage = () => {
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
}