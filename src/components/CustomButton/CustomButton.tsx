import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import "./customButton.scss";
export const CustomButton: React.FC<PropsType> = ({ text, ...props }) => {
   return (
      <button  {...props} className={`custom-btn ${props.className ? props.className : ''}`}>
         <span className="custom-btn__text"> {text}</span>
      </button>
   )
}
type PropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
   text: string
}