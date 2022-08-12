import { DetailedHTMLProps, FocusEvent, InputHTMLAttributes, useState } from "react"
import "./customInput.scss"
export const CustomInput: React.FC<PropsType> = ({ labelText, errorValidate, ...props }) => {
   const [active, setActrive] = useState('')
   const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
      setActrive(' active')
      props.onFocus && props.onFocus(e)
   }
   const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
      setActrive('')
      props.onBlur && props.onBlur(e)
   }
   return (
      <span className={`custom-input custom-input__wrapper${active} ${errorValidate ? 'error' : ''}`}>
         {
            labelText && <label
               className={`custom-input__label${!active && props.value !== '' ? ' filled' : ''}`}
               htmlFor={labelText}>
               {labelText}
            </label>
         }
         {
            labelText ? <input
               onBlur={onBlurHandler}
               onFocus={onFocusHandler}
               className="custom-input__input"
               id={labelText}
               {...props} /> :
               <input
                  onBlur={onBlurHandler}
                  onFocus={onFocusHandler}
                  className="custom-input__input"
                  {...props} />
         }

      </span>
   )
}

type PropsType = DefaultInputPropsType & {
   labelText?: string
   errorValidate?: boolean
}
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>