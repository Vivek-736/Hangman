import { useState } from 'react';

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

interface KeyboardProps {
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({ addGuessedLetter, disabled }) => {
  const [clickedKeys, setClickedKeys] = useState<string[]>([]);

  const handleClick = (key: string) => {
    setClickedKeys([...clickedKeys, key]);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2">
      {KEYS.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => { handleClick(key); addGuessedLetter(key); }}
          disabled={clickedKeys.includes(key)}
          className={`text-white ${clickedKeys.includes(key) || disabled ? 'bg-gradient-to-br from-slate-500 via-black to-gray-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl'} focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg uppercase px-5 py-2.5 text-center me-2 mb-2 text-xl`}
        >
          {key}
        </button>
      ))}
    </div>
  )
}

export default Keyboard
