// import { AiOutlineArrowLeft } from 'react-icons/ai';
// import AuthenticationBody from './AuthenticationBody';
import { NavLink } from 'react-router-dom'

function Register() {
    
    return (
        <>
            {/* <AuthenticationBody /> */}

            <div>
                <NavLink to="/login">
                    {/* <AiOutlineArrowLeft />  */}
                    <h2>⬅️ Regresar</h2>
                </NavLink>
                

                <form action="" method="">
                    <input type="email" placeholder="Ingresa tu correo" required />
                    <input type="text" placeholder="Crea tu nombre de usuario" required />
                    <select>
                        <option value="">Dinos de dónde eres</option>
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="venezuela">Venezuela</option>
                        <option value="mexico">Mexico</option>
                        <option value="peru">Perú</option>
                        <option value="brasil">Brasil</option>
                        <option value="chile">Chile</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                    <input type="password" placeholder="Contraseña" required />
                    <input type="password" placeholder="Confirmar contraseña" required />

                    <button>Crea tu cuenta</button>
                </form>

                {/* <p>o tambien  puedes conectarte con</p>
                <div>
                    <a href="">Facebook
                        <img src="" alt="" />
                    </a>
                    <a href="">Apple
                        <img src="" alt="" />
                    </a>
                    <a href="">Google
                        <img src="" alt="" />
                    </a>
                </div> */}

            </div>
        </>
    )

}

export default Register