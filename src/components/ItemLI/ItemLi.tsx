import React from "react"

export const ItemLi: React.FC<PropsType> = (
   { className, style, children }
) => <li style={style} className={className}>
      {children}
   </li>
type PropsType = {
   className: string
   style?: React.CSSProperties
   children?: React.ReactNode
}