import React, { ChangeEvent } from "react"
import { CustomTextarea } from "../../../components/CustomTextarea/CustomTextarea"
import { ItemLi } from "../../../components/ItemLI/ItemLi"

export const FormMessage: React.FC<PropsType> = React.memo(({ errorMessage, value, onChangeHandler, ...props }) => {
   const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChangeHandler(e.currentTarget.value)
   }
   return (
      <ItemLi className="hire__item">
         <CustomTextarea
            onChange={onChange}
            errorValidate={!!errorMessage}
            value={value}
            name="message" labelText={'Message *'} />
         {!!errorMessage && <span className="hire__error">{errorMessage}</span>}
      </ItemLi>
   )
})
type PropsType = {
   errorMessage: string
   value: string
   onChangeHandler: (value: string) => void
}