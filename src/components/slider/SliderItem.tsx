import React, { useCallback, useEffect, useState } from "react"
export const SliderItem: React.FC<PropsType> = React.memo(({ img, onDoubleClick, src }) => {
   const [clickCount, setClickCount] = useState(0)
   const onDoubleClickHandler = useCallback(() => {
      onDoubleClick && onDoubleClick(src ? src : 'https://alexanderlukomsky.github.io/portfolio/')
   }, [onDoubleClick, src])
   useEffect(() => {
      const id = setTimeout(() => {
         if (clickCount === 2) {
            onDoubleClickHandler()
         }
         setClickCount(0)
      }, 500)
      return () => {
         clearTimeout(id)
      }
   }, [clickCount, onDoubleClickHandler])

   const onClickHandler = () => {
      setClickCount(click => click + 1)
   }
   return (
      <div className="slider-items__item"  >
         <span className="slider-items__img-screen"
            onClick={onClickHandler}
            onDoubleClick={onDoubleClickHandler}
         ></span>
         <img src={img} alt="portfolio-img" />
      </div>
   )
})
type PropsType = {
   img: string
   src?: string
   onDoubleClick?: (url: string) => void
}