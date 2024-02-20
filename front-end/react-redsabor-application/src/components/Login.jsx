import AuthenticationBody from "./AuthenticationBody"
import { NavLink } from 'react-router-dom'


function Login() {

    return (
        <>
            <AuthenticationBody />
            <div>
                <h2>Inicia tu sesión</h2>
                <div>
                    <p>¿No tienes una cuenta?</p> <NavLink to="/register">Regístrate aqui.</NavLink>
                </div>
                <form action="" method="">
                    <input type="email" id="email" name="email" placeholder="Ingresa tu correo o nombre de usuario" required />
                    <input type="password" id="password" name="password" placeholder="Contraseña" />
                </form>

                <p>¿Olvidaste tu contraseña?</p>

                <button id="btn-ingresar">Ingresar</button>

                <p>o tambien puedes conectarte con</p>

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

export default Login
