import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

import { useState } from "react";
import GamePage from "./GamePage";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const App = () => {
  // Application state (data)
  const maxWrongGuess = 9;
  const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

  const [guesses, addGuess] = useState([]);

  const [word, generateWord] = useState(wordList[random(0, wordList.length)]);

  // Event handlers
  const handleAddGuess = (newLetter) => {
    // console.log(newLetter);
    addGuess([...guesses, newLetter]);
  };

  const handleGenerateWord = () => {
    generateWord(wordList[random(0, wordList.length)]);
    addGuess([]);
  };
  console.log(word);

  // Computed values
  const wrongGuessCount = guesses.filter(
    (guess) => !word.split("").includes(guess)
  ).length;
  // console.log(wrongGuessCount);

  const lost = wrongGuessCount >= maxWrongGuess;
  const won = word.split("").every((letter) => guesses.includes(letter));

  const gameEnded = lost || won;

  const letters = word.split("").map((letter) => ({
    letter, // letter: letter
    visible: guesses.includes(letter) || lost,
    missing: lost && !guesses.includes(letter),
  }));

  const buttonLetters = buttonText.split("").map((letter) => ({
    letter,
    disabled: guesses.includes(letter) || lost || won,
  }));

  //console.log(wrongGuessCount, lost);

  return (
    <>
      <h1>Hangman</h1>

      <Word letters={letters} won={won} lost={lost} />

      <GamePage
        onNewGameClick={handleGenerateWord}
        letters={buttonLetters}
        onButtonClick={handleAddGuess}
        gameEnded={gameEnded}
      />

      <Result wrong={wrongGuessCount} maxWrongGuess={maxWrongGuess} />

      <Hangman wrong={wrongGuessCount} />
    </>
  );
};

export default App;
