import Buttons from "./Buttons";

const GamePage = ({ onNewGameClick, letters, onButtonClick, gameEnded }) => {
  if (gameEnded) {
    return (
      <>
        <button onClick={onNewGameClick}>New game</button>
      </>
    );
  } else {
    return (
      <>
        <Buttons letters={letters} onClick={onButtonClick} />
      </>
    );
  }
};

export default GamePage;
