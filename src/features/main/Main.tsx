import { useState, MouseEvent } from "react";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { ParticlesContainer } from "../../components/Particles/ParticlesContainer";
import { particlesOption } from "../../components/Particles/particlesOption";
import photo from "../../common/assets/photo/photo.jpg";
import "./main.scss";
import { useSelector } from "react-redux";
import { selectLinkCV } from "../../utils";

export const Main = () => {
  const linkToCv = useSelector(selectLinkCV);
  const [isClickedPhoto, setIsClickedPhoto] = useState(false);
  const onPhotoClick = () => {
    setIsClickedPhoto(true);
  };
  const onLinkClick = () => {
    setIsClickedPhoto(false);
  };
  return (
    <>
      <section className="main" id="main">
        <ParticlesContainer options={particlesOption} />
        <div className="container">
          <div className="main__columns">
            <div className="main__greeting">
              <span className="main__text">
                <span> Hey,</span>
                <span>I’m Alexander</span>
              </span>
              <h1 className="main__title">
                Frontend
                <Typewriter
                  options={{
                    strings: ["Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div className="main__photoBlock">
              <Tilt tiltEnable={!isClickedPhoto}>
                <img src={photo} alt="Alexander" onClick={onPhotoClick} />
                {isClickedPhoto && (
                  <div className="photo-overlay" onClick={onLinkClick}>
                    <a
                      className="photo-link"
                      href={linkToCv}
                      rel="noreferrer"
                      onClick={onLinkClick}
                    >
                      Link to CV
                    </a>
                  </div>
                )}
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
