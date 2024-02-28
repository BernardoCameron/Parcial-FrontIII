/* eslint-disable react/prop-types */
import CardStyle from '../Styles/Card.module.css'

const Card = ({ usuario, color }) => {
    return (
        <div className={CardStyle.cardContainer} style={{ backgroundColor: color }}>
            <h2>Hola {usuario} esta cajita es de tu color favorito 👌</h2>

        </div>
    )
}

export default Card