import React from 'react'

interface HeadingProps{
    handleClick : ()=>void
}

const Button : React.FC<HeadingProps> = React.memo(({handleClick}) => {
  return (
    <div className='text-center w-full flex justify-center'>
      <h1 onClick={handleClick} className='cursor-pointer bg-black text-white font-semibold text-xs mt-4 p-2 px-6 rounded-sm w-[40%]'>Generate</h1>
    </div>
  )
})

export default Button
