import './Card.css'
import { Link } from "react-router-dom"

function Card({title = 'Titulo por defecto', image = '', description = 'Descripcion por defecto'}) {
    return (
    <div className="Card">
        <Link to={title}>
        <h2></h2>
        <p>{description}</p>
        </Link>
    </div>
    )
}

export default Card;