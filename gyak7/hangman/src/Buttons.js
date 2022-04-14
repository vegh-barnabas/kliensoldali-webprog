const Buttons = ({ letters, onClick }) => {
  return (
    <div id="betuk">
      {letters.map(({ letter, disabled }, i) => (
        <button disabled={disabled} key={i} onClick={() => onClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
