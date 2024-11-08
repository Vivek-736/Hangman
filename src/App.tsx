import { useCallback, useEffect, useState } from "react"
import verbs from "./verbs.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  const [wordToGuess, ] = useState(() => {
    return verbs[Math.floor(Math.random() * verbs.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters([...guessedLetters, letter]);
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^([a-z])$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [addGuessedLetter])

  return (
    <>
      <div className="max-w-[800px] flex flex-col gap-8 mx-auto my-0 items-center">
        <div className="text-center text-2xl transition text-green-200">
          {isWinner && "Well Done! You won! Wanna play again? Refresh the page!"}
            {isLoser && (
            <span className="text-red-200">
              You lost! The word was: <span className="font-bold text-green-400">{wordToGuess}</span>. Wanna play again? Refresh the page!
            </span>
            )}
            {!isWinner && !isLoser && (
              <div className="bg-clip-text text-transparent bg-gradient-to-b from-green-400 via-purple-400 to-sky-400 font-bold text-sm md:text-2xl">
                Welcome to Hangman game! Use Your Six Guesses Wisely!
              </div>
            )}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div className="self-stretch">
          <Keyboard addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser} />
        </div>
      </div>
    </>
  )
}

export default App
