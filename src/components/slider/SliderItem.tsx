import React, { useCallback, useEffect, useState } from "react";
export const SliderItem: React.FC<PropsType> = React.memo(
  ({ img, onDoubleClick, srcImg }) => {
    const [clickCount, setClickCount] = useState(0);
    const onDoubleClickHandler = useCallback(() => {
      onDoubleClick &&
        onDoubleClick(
          srcImg ? srcImg : "https://alexanderlukomsky.github.io/portfolio/"
        );
    }, [onDoubleClick, srcImg]);
    useEffect(() => {
      const id = setTimeout(() => {
        setClickCount(0);
      }, 500);
      if (clickCount === 2) {
        onDoubleClickHandler();
      }
      return () => {
        clearTimeout(id);
      };
    }, [clickCount, onDoubleClickHandler]);
    const onClickHandler = () => {
      setClickCount((click) => click + 1);
    };
    return (
      <div className="slider-items__item">
        <span
          className="slider-items__img-screen"
          onClick={onClickHandler}
        ></span>
        <a
          className="slider-items__link"
          href={srcImg}
          target={"_blank"}
          rel="noreferrer"
        >
          project link
        </a>
        <img src={img} alt="portfolio-img" />
      </div>
    );
  }
);
type PropsType = {
  img: string;
  srcImg?: string;
  onDoubleClick?: (url: string) => void;
};
