import "./title.scss"
export const Title: React.FC<PropsType> = ({ text }) => <h2 className="blockTitle">{text}</h2>
type PropsType = {
   text: string
}