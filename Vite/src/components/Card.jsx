import './Card.css'
import { Link } from "react-router-dom"

function Card({title = 'Titulo por defecto', description = 'Descripcion por defecto'}) {
    return (
    <div className="Card">
        <Link to={title}>
        <h2>{title}</h2>
        <p>{description}</p>
        </Link>

    </div>
    )
}

export default Card;