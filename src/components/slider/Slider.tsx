import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
export const Slider: React.FC<PropsType> = ({ array, properties, onDoubleClick, ...props }) => {
   return (
      <Slide {...props} canSwipe cssClass="slider" {...properties} autoplay={true} duration={3000}>
         {array.map((slide, index) => (
            <div className="slider__item" key={index}
               onDoubleClick={() => { onDoubleClick && onDoubleClick('https://github.com/AlexanderLukomsky?tab=repositories') }}
            >
               <div className="slider__img" style={{ backgroundImage: `url(${slide.img})` }}></div>
            </div>
         ))
         }
      </Slide >
   )
}
type PropsType = {
   array: {
      img: string
   }[]
   slidesToShow?: number
   slidesToScroll?: number
   autoplay?: boolean
   transitionDuration?: number
   indicators?: boolean
   infinite?: boolean
   properties?: {
      prevArrow: JSX.Element;
      nextArrow: JSX.Element;
   }
   onDoubleClick?: (url: string) => void
}