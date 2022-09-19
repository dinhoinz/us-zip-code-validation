import InputZipCode from "./inputZipCode"
import classes from './ZipCodeForm.module.css'
const ZipCodeForm:React.FC<{}> = props => {
    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("form submit")
      }
    return(
        <form onSubmit={handleFormSubmit} className={classes.form}>
        <p>Enter a US zip code below to see if its valid</p>
        <InputZipCode/>
        <button className={classes.submitBtn} type='submit'>Submit</button>
      </form>
    )
}
export default ZipCodeForm