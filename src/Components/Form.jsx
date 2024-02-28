import FormStyles from '../Styles/Form.module.css'
import { useState } from 'react'
import Card from './Card'

export const Form = () => {
    const [usuario, setUsuario] = useState({ nombre: '', color: '' })
    const [mostrarCard, setMostrarCard] = useState(false)
    const [mostrarError, setMostrarError] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        if (usuario.nombre.length >= 3 && !usuario.nombre.startsWith(' ') && usuario.color.includes('#') && usuario.color.length === 7) {
            setMostrarCard(true)
            setMostrarError(false)
        } else {
            setMostrarError(true)
            setMostrarCard(false)
        }

    }


    return (
        <div className={FormStyles.formContainer}>

            <form onSubmit={handleSubmit}>

                <h2 style={{ color: 'gray' }}>Elige tu color 😊</h2>
                <input className={FormStyles.inputText} type="text" placeholder='Ingresa tu nombre' onChange={(event) => setUsuario({ ...usuario, nombre: event.target.value })} />
                <input className={FormStyles.inputText} type="text" placeholder='Ingresa tu color favorito (En hexadecimal)' onChange={(event) => setUsuario({ ...usuario, color: event.target.value })} />
                <button className={FormStyles.sendButton}>Enviar</button>



            </form>

            {mostrarCard ?
                <>
                    <Card usuario={usuario.nombre} color={usuario.color} />
                </> : null
            }

            {mostrarError ? <><h3 style={{ color: 'red' }}> Debe colocar los datos correctamente, recuerda que el color debe ser en hexadecimal</h3></> : null}

        </div>
    )
}
