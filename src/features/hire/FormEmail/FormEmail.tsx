import React, { ChangeEvent } from "react"
import { CustomInput } from "../../../components/CustomInput/CustomInput"
import { ItemLi } from "../../../components/ItemLI/ItemLi"

export const FormEmail: React.FC<PropsType> = React.memo(({ onChangeHandler, errorMessage, value, ...props }) => {
   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeHandler(e.currentTarget.value)
   }
   return (
      <ItemLi className="hire__item">
         <CustomInput
            onChange={onChange}
            value={value}
            errorValidate={!!errorMessage}
            type={'email'} labelText={'Email *'} />
         {!!errorMessage && <span className="hire__error">{errorMessage}</span>}
      </ItemLi>
   )
})
type PropsType = {
   errorMessage: string
   value: string
   onChangeHandler: (value: string) => void
}