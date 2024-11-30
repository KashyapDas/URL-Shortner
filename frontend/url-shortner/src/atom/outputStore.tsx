import { atom } from "recoil";


export const outputStore = atom<string>({
    key : "outputStore",
    default : "",
})