import { useState } from 'react'
import classes from './inputZipCode.module.css'
const InputZipCode:React.FC<{}> = () => {

    const [zipCodeUs, setZipCodeUs] = useState('')
    const exceptThisSymbols = ["e", "E", "+", "-", "."];
    const isValid = (zipCode:string) => {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
     }
     const handleSetZipCodeUs = (event:React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setZipCodeUs(target.value)
        if(!isValid(target.value)){
            target.classList.add(classes.invalid)
        }else{
            target.classList.remove(classes.invalid)
        }
     }

    return(
        <input type='number' min='0' onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()} className={classes.inputZipCode} onChange={handleSetZipCodeUs} value={zipCodeUs}></input>
    )
}
export default InputZipCode