import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { setCredentials } from "./authSlice"
import { useLoginMutation } from "./authApiSlice"

import styles from './Login.module.css';
import { Link } from "react-router-dom";

const LoginAuth = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials(userData));
      setEmail('')
      setPassword('')
      navigate('/');
    } catch (error) {
      if(!error?.originalStatus) {
        setErrMsg('No server response');
      } else if(error?.response.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if(error?.response.status === 401) {
        setErrMsg('Unathorized')
      } else {
        setErrMsg('Login failed')
      }
    }
  }

  const userInputHandler = (e) => setEmail(e.target.value);
  const passInputHandler = (e) => setPassword(e.target.value);

  const content = isLoading ? <h1>Loading...</h1> : (
    <div className={`${styles.container} mx-auto`}>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>

      <Link to='/'>
        <img src="icon-nav.svg" alt="logo redsabor" />
      </Link>
      
      <div className="flex mt-8">
        <div>
          <p className={styles.title}>Únete <br /> a la mejor comunidad culinaria</p>
          <img src="cooking-img.svg" alt="imagen mujer cocinando" />
        </div>

        <div className={`${styles.formContainer} flex flex-col`}>
          <p className="text-3xl font-bold">Iniciar sesión</p>
          <span>¿No tienes una cuenta? <Link to='/sign-up'><strong>Regístrate aquí</strong></Link></span>

          <form onSubmit={submitHandler} className={`${styles.formContainer} flex flex-col`}>
            <input type="text" placeholder="Ingresa tu email" value={email} onChange={userInputHandler} ref={userRef} autoComplete="off" required />
            <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={passInputHandler} required />
            <button type="submit">Ingresar</button>
          </form>
          
        </div>
      </div>
    </div>
  )

  return content;
}

export default LoginAuth
