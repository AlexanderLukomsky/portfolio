import { MouseEvent, useCallback, useEffect, useState } from "react"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import { CircularProgressBar } from "../../components/ProgressBar/CircularProgressBar"
import { Title } from "../../components/Title/Title"
import { setFormEmail, setFormMessage, setFormName, submitForm } from "../../store/appReducer"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { validate } from "../../utils/validate"
import { FormEmail } from "./FormEmail/FormEmail"
import { FormMessage } from "./FormMessage/FormMessage"
import { FormName } from "./FormName/FormName"
import "./hire.scss"
export const Hire = () => {
   const dispatch = useAppDispatch()
   const [disabled, setDisabled] = useState(false)
   const formState = useAppSelector(state => state.app.formState)
   const [errorValidate, setErrorValidate] = useState<ErrorValidateType>({ name: { message: '' }, email: { message: '' }, message: { message: '' } })
   const checkValidateMessage = useCallback(() => {
      if (
         !!errorValidate.name.message ||
         !!errorValidate.email.message ||
         !!errorValidate.message.message
      ) { return true }
      return false
   }, [errorValidate])
   useEffect(() => {
      setDisabled(checkValidateMessage())
   }, [checkValidateMessage])
   const onChangeNameHandler = useCallback((value: string) => {
      setErrorValidate(obj => ({ ...obj, name: { message: '' } }))
      dispatch(setFormName({ name: value }))
   }, [dispatch])
   const onChangeEmailHandler = useCallback((value: string) => {
      setErrorValidate(obj => ({ ...obj, email: { message: '' } }))
      dispatch(setFormEmail({ email: value }))
   }, [dispatch])
   const onChangeMessageHandler = useCallback((value: string) => {
      setErrorValidate(obj => ({ ...obj, message: { message: '' } }))
      dispatch(setFormMessage({ message: value }))
   }, [dispatch])
   const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const validated = validate(formState.formData)
      if (validated !== true) {
         setErrorValidate(validated)
         return
      }
      dispatch(submitForm(formState.formData))
   };
   return (
      <section className='hire blockPadding' id="hire">
         <div className="container hire__container">
            <Title text="Contacts" />
            <form action="#" className="hire__form">
               {formState.formStatus === 'pending' && <CircularProgressBar />}
               <ul className="hire__column">
                  <FormName value={formState.formData.name} errorMessage={errorValidate.name.message} onChangeHandler={onChangeNameHandler} />
                  <FormEmail value={formState.formData.email} errorMessage={errorValidate.email.message} onChangeHandler={onChangeEmailHandler} />
                  <FormMessage value={formState.formData.message} errorMessage={errorValidate.message.message} onChangeHandler={onChangeMessageHandler} />
               </ul>
               <CustomButton disabled={formState.formStatus === 'pending' || disabled} onClick={handleSubmit} text={'send message'} type="submit" />
            </form>
         </div>
      </section>
   )
}
type ErrorValidateType = {
   name: { message: string }
   email: { message: string }
   message: { message: string }
}