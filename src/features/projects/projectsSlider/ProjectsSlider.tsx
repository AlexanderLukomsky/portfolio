import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { Slider } from "components/slider";
import { useEffect, useState } from "react";

export const ProjectsSlider = () => {
  const [canSwipe, setCanSwipe] = useState(false);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setCanSwipe(true);
    }
  }, []);

  const buttonStyle = {
    width: "40px",
    height: "40px",
    background: "#fff",
  };
  const arrowStyle = {
    color: "#000",
    fontSize: "25px",
  };
  const properties = {
    prevArrow: (
      <IconButton className="projects__slider-btn" style={{ ...buttonStyle }}>
        <ArrowBackIcon style={arrowStyle} className="projects__slider-arrow" />
      </IconButton>
    ),
    nextArrow: (
      <IconButton className="projects__slider-btn" style={{ ...buttonStyle }}>
        <ArrowForwardIcon
          style={arrowStyle}
          className="projects__slider-arrow"
        />
      </IconButton>
    ),
  };
  return (
    <div className="projects__slider">
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        indicators={true}
        transitionDuration={300}
        infinite={true}
        properties={properties}
        canSwipe={canSwipe}
      />
    </div>
  );
};
