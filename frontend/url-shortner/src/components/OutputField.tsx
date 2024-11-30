import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { outputStore } from '../atom/outputStore';

const OutputField = React.memo(() => {

    const [val, setVal] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const getRecoilResponse = useRecoilValue<string>(outputStore);

    useEffect(()=>{
        setVal(getRecoilResponse);
    },[getRecoilResponse]);
    
    const handleCopy = () => {
        if (inputRef.current)
        {
          navigator.clipboard.writeText(inputRef.current.value)
            .then(() => {
              alert('Copied to clipboard...');
            })
            .catch(()=> {
              console.error('Failed to copy !!!');
            });
        }
      };

  return (
    <div className='w-full mt-3 text-center px-2 flex'>
        <input ref={inputRef} value={val}  type="text" className={`w-full text-center font-semibold text-sm ${inputRef.current != null ? "inline" : "hidden" } border-2 border-solid border-black`} disabled  />
        
        <button onClick={handleCopy} className={`bg-black text-white font-semibold text-md px-2 py-1 uppercase cursor-default ${inputRef.current != null ? "inline" : "hidden"}`}>Copy</button>
    </div>
  )
})

export default OutputField
