import { FC, memo } from "react";
export const SliderItem: FC<PropsType> = memo(({ img, srcImg }) => {
  return (
    <div className="slider-items__item">
      <span className="slider-items__img-screen"></span>
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
});
type PropsType = {
  img: string;
  srcImg?: string;
};
