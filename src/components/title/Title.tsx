import { Fade } from "react-awesome-reveal";
import "./title.scss";

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => (
  <Fade direction={"up"}>
    <h2 className="blockTitle">{text}</h2>
  </Fade>
);
