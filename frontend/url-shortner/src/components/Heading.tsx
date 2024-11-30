import React from 'react'

interface HeadingProps{
    heading1 : String,
    heading2 : String,
}

const Heading : React.FC<HeadingProps> = React.memo(({heading1,heading2}) => {
  return (
    <div className='mt-10 w-full text-center'>
        <h1 className='font-semibold text-2xl'>{heading1}</h1>
        <h1 className='font-semibold text-2xl'>{heading2}</h1>
    </div>
  )
})

export default Heading
