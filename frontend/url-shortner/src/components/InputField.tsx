import React, { useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { outputStore } from "../atom/outputStore";

interface URLShortenString{
    url : String,
    shortUrl : String
}


const InputField = React.memo(() => {

    const inputRef = useRef<HTMLInputElement>(null);
    // Get the Recoil Value
    let setRecoilResponse = useSetRecoilState(outputStore);

    const handleClick = async()=>
    {

        if(inputRef.current)
        {
            const response = await axios.post<URLShortenString, any>("http://localhost:3000/create-url-shortner/",{
                url : inputRef.current.value
            })
            setRecoilResponse(response.data.shortUrl);
        }
    }

  return (
    <div className="mt-4 w-full h-fit text-center">
      <input
        ref={inputRef}
        type="text"
        name="inputField"
        id="inputField"
        placeholder="Your url..."
        className="bg-black text-white p-3 rounded-md w-[70%] text-xs font-bold border-none outline-none"
      />
      <Button handleClick={handleClick}/>
    </div>
  );
})

export default InputField;
