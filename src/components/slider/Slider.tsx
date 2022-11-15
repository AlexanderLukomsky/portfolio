import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderItem } from "./SliderItem";
export const Slider: React.FC<PropsType> = ({
  array,
  properties,
  ...props
}) => {
  return (
    <Slide {...props} cssClass="slider-items" {...properties} duration={4000}>
      {array.map((slide, index) => (
        <SliderItem img={slide.img} key={index} srcImg={slide.src} />
      ))}
    </Slide>
  );
};
type PropsType = {
  array: {
    img: string;
    src?: string;
  }[];
  canSwipe?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  transitionDuration?: number;
  indicators?: boolean;
  infinite?: boolean;
  properties?: {
    prevArrow: JSX.Element;
    nextArrow: JSX.Element;
  };
};
