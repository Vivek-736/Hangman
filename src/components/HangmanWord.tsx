import clsx from "clsx"

interface HangmanWordProps {
  guessedLetters: string[],
  wordToGuess: string
}

const HangmanWord: React.FC<HangmanWordProps> = ({ guessedLetters, wordToGuess }) => {
  return (
    <div className="flex gap-1 text-2xl font-bold uppercase font-mono text-sky-100 justify-center">
      {wordToGuess.split("").map((letter) => (
        <span className="border-b-2 border-blue-300 text-4xl mr-8">
          <span className={clsx({ "invisible": !guessedLetters.includes(letter) })}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
