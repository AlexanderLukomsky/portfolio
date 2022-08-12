import React, { ChangeEvent } from "react"
import { CustomInput } from "../../../components/CustomInput/CustomInput"
import { ItemLi } from "../../../components/ItemLI/ItemLi"

export const FormName: React.FC<PropsType> = React.memo(({ errorMessage, value, onChangeHandler, ...props }) => {
   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeHandler(e.currentTarget.value)
   }
   return (
      <ItemLi className="hire__item">
         <CustomInput
            onChange={onChange}
            errorValidate={!!errorMessage}
            value={value}
            type={'text'} labelText={'Name *'}
         />
         {!!errorMessage && <span className="hire__error">{errorMessage}</span>}
      </ItemLi>
   )
})
type PropsType = {
   errorMessage: string
   value: string
   onChangeHandler: (value: string) => void
}