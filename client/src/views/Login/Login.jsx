import { Link } from "react-router-dom";
import styles from './Login.module.css';
import { useEffect, useRef, useState, useContext } from "react";
import axios from '../../../api/axios';

import LoginAuth from '../../features/auth/LoginAuth'

const Login = () => {

  // const { setAuth } = useContext(AuthContext)

  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [pass, setPass] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pass])

  // const [form, setForm] = useState({
  //   email: '',
  //   username: '',
  //   nationality: '',
  //   password: ''
  // });

  // const [errors, setErrors] = useState({
  //   email: '',
  //   username: '',
  //   nationality: '',
  //   password: ''
  // })

  // const changeHandler = (e) => {
  //   const property = e.target.name;
  //   let value = e.target.value;

  //   validate({...form, [property]: value})

  //   setForm({...form, [property]: value})
  // }

  // const validate = (form) => {
    

  //   return ;
  // }

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/login', JSON.stringify({user, pass}), {
  //       headers: {'Content-Type': 'application/json'},
  //       withCredentials: true
  //     })
  //     console.log(JSON.stringify(response?.data));
  //     // console.log(JSON.stringify(response));
  //     const accessToken = response?.data?.accessToken;
  //     const roles = response?.data?.roles;
  //     setAuth({ user, pass, roles, accessToken })
  //     setUser('')
  //     setPass('')
  //     setSuccess(true)
  //   } catch (error) {
  //     if(!error?.response) {
  //       setErrMsg('No server response')
  //     } else if(error.response?.status === 400) {
  //       setErrMsg('Missing Username or Password')
  //     } else if(error.response?.status === 401) {
  //       setErrMsg('Unathorized')
  //     } else {
  //       setErrMsg('Login failed')
  //     }

  //     errRef.current.focus()
  //   }
  // }

  return (
    <LoginAuth />
  )
}

export default Login
