import React from 'react';

const HEAD = (
  <div className='w-[25px] h-[25px] rounded-[100%] border-[5px] border-red-200 absolute top-[25px] right-[-10px]' />
)

const BODY = (
  <div className='w-[5px] h-[50px] bg-red-300 absolute top-[50px] right-0' />
)

const RIGHT_ARM = (
  <div className='w-[50px] h-[5px] bg-red-400 absolute top-[75px] right-[-50px] rotate-[-30deg] origin-bottom-left' />
)

const LEFT_ARM = (
  <div className='w-[50px] h-[5px] bg-red-400 absolute top-[75px] right-[5px] rotate-[30deg] origin-bottom-right' />
)

const RIGHT_LEG = (
  <div className='w-[50px] h-[5px] bg-red-500 absolute top-[95px] right-[-45px] rotate-[60deg] origin-bottom-left' />
)

const LEFT_LEG = (
  <div className='w-[50px] h-[5px] bg-red-500 absolute top-[95px] right-0 rotate-[-60deg] origin-bottom-right' />
)

const bodyParts = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangManDrawingProps {
  numberOfGuesses: number;
}

const HangmanDrawing: React.FC<HangManDrawingProps> = ({ numberOfGuesses }) => {
  return (
    <div className='relative'>
      {bodyParts.slice(0, numberOfGuesses)}
      <div className='h-[25px] w-[5px] bg-slate-200 absolute top-0 right-0' />
      <div className='h-[5px] w-[100px] bg-slate-200 ml-[60px]' />
      <div className='h-[200px] w-[5px] bg-slate-200 ml-[60px]' />
      <div className='h-[5px] w-[125px] bg-slate-200' />
    </div>
  )
}

export default HangmanDrawing;
