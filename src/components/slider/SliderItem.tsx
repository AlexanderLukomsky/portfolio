import { FC, memo } from "react";
import { Nullable } from "../../common/types";
export const SliderItem: FC<PropsType> = memo(({ img, srcImg, title }) => {
  return (
    <div className="slider-items__item">
      <span className="slider-items__img-screen"></span>
      <a
        className="slider-items__link"
        href={srcImg}
        target={"_blank"}
        rel="noreferrer"
      >
        {title ? title : "Project link"}
      </a>
      <img src={img} alt="portfolio-img" />
    </div>
  );
});
type PropsType = {
  img: string;
  srcImg?: string;
  title: Nullable<string>;
};
