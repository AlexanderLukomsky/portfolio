import { useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { selectProjects } from "../../utils";
import { SliderItem } from "./SliderItem";
export const Slider: React.FC<PropsType> = ({ properties, ...props }) => {
  const projects = useSelector(selectProjects);
  return (
    <Slide {...props} cssClass="slider-items" {...properties} duration={4000}>
      {projects.map((project, index) => (
        <SliderItem
          title={project.title}
          img={project.img}
          key={index}
          srcImg={project.src}
        />
      ))}
    </Slide>
  );
};
type PropsType = {
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
