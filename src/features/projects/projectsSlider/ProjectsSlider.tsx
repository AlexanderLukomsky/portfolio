import { Slider } from "../../../components/Slider/Slider"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from "@mui/material";
import { useAppSelector } from "../../../store/store";
export const ProjectsSlider = () => {
   const projects = useAppSelector(state => state.app.projects)
   const buttonStyle = {
      width: '40px',
      height: '40px',
      background: '#fff'
   };
   const arrowStyle = {
      color: '#000',
      fontSize: '25px'
   }
   const properties = {
      prevArrow: <IconButton className="projects__slider-btn" style={{ ...buttonStyle }}>
         <ArrowBackIcon style={arrowStyle} className="projects__slider-arrow" />
      </IconButton>,
      nextArrow: <IconButton className="projects__slider-btn" style={{ ...buttonStyle }}>
         <ArrowForwardIcon style={arrowStyle} className="projects__slider-arrow" />
      </IconButton>
   }
   const onDoubleClickHandler = (url: string) => {
      window.open(url, '_blank');
   }
   return (
      <div className="projects__slider">
         <Slider
            array={projects}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            indicators={true}
            transitionDuration={300}
            infinite={true}
            properties={properties}
            onDoubleClick={onDoubleClickHandler}
         />
      </div>
   )
}