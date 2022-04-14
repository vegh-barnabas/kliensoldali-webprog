const Result = ({ wrong, maxWrongGuess }) => {
  return (
    <div id="eredmeny">
      {wrong}/{maxWrongGuess}
    </div>
  );
};

export default Result;
