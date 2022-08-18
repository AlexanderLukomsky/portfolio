import { Fade } from "react-awesome-reveal";
import "./title.scss"


export const Title: React.FC<PropsType> = ({ text }) => (
   <Fade direction={"up"}> <h2 className="blockTitle">{text}</h2></Fade>
)
type PropsType = {
   text: string
}
