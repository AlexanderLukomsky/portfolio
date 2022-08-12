import { DetailedHTMLProps, FocusEvent, TextareaHTMLAttributes, useState } from "react"
import "./customTextarea.scss";
export const CustomTextarea: React.FC<PropsType> = ({ labelText, errorValidate, ...props }) => {
   const [active, setActrive] = useState('')
   const onFocusHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
      setActrive(' active')
      props.onFocus && props.onFocus(e)
   }
   const onBlurHandler = (e: FocusEvent<HTMLTextAreaElement>) => {
      setActrive('')
      props.onBlur && props.onBlur(e)
   }
   return (
      <span className={`custom-textarea custom-textarea__wrapper${active} ${errorValidate ? 'error' : ''}`}>
         {
            labelText && <label
               className={`custom-textarea__label${!active && props.value !== '' ? ' filled' : ''}`}
               htmlFor={labelText}>
               {labelText}
            </label>
         }
         {
            labelText ? <textarea
               onBlur={onBlurHandler}
               onFocus={onFocusHandler}
               className="custom-textarea__textarea"
               id={labelText}
               {...props} /> :
               <textarea
                  onBlur={onBlurHandler}
                  onFocus={onFocusHandler}
                  className="custom-textarea__textarea"
                  {...props} />
         }

      </span>
   )
}
type PropsType = {
   labelText?: string
   errorValidate?: boolean
} & DefaultTextAreaProps
type DefaultTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>