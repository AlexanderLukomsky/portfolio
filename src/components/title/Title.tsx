import "./title.scss"
export const Title: React.FC<PropsType> = ({ text }) => <h2 className="title">{text}</h2>
type PropsType = {
   text: string
}