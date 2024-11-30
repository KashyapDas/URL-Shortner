import React from 'react'
import Heading from './components/Heading'
import InputField from './components/InputField'
import OutputField from './components/OutputField'
import { RecoilRoot } from 'recoil'


const App : React.FC = React.memo(() => {
  return (
    <RecoilRoot>
    <div className='flex flex-col items-center'>
        <Heading heading1="Create Your Own" heading2="URL-Shortner"/> 
        <InputField/>
        <OutputField />
    </div>
    </RecoilRoot>
  )
})

export default App
