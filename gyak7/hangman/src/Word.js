import cn from "classnames";
import Letter from "./Letter";

const Word = ({ letters, won, lost }) => {
  return (
    <div id="szo" className={cn({ nyer: won }, { hianyzo: lost })}>
      {letters.map(({ letter, visible, missing }, i) => (
        <Letter visible={visible} missing={missing} key={i}>
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default Word;
