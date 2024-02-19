import { AiOutlineArrowLeft } from 'react-icons/ai';
import AuthenticationBody from './AuthenticationBody';

function Register(){

    return (
        <>
            <AuthenticationBody/>
            
            <div>
                <a href="">
                    <AiOutlineArrowLeft />
                    <h2>Regresar</h2>

                </a>

                <form action="" method="">
                    <input type="email" placeholder="Ingresa tu correo" required/>
                    <input type="text" placeholder="Crea tu nombre de usuario" required/>
                    <select>
                        <option value="">Dinos de dónde eres</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="password" placeholder="Contraseña" required/>
                    <input type="password" placeholder="Confirmar contraseña" required/>

                    <button>Crea tu cuenta</button>
                </form>

                <p>o tambien  puedes conectarte con</p>
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
                </div>

            </div>
        </>
    )

}

export default Register