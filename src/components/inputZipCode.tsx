import { useState } from 'react'
import classes from './inputZipCode.module.css'
const InputZipCode:React.FC<{}> = () => {

    const [zipCodeUs, setZipCodeUs] = useState('')

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
        <input type='text' className={classes.inputZipCode} onChange={handleSetZipCodeUs} value={zipCodeUs}></input>
    )
}
export default InputZipCode