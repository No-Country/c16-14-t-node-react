import { Link } from "react-router-dom";
import styles from './Register.module.css';
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const countryNames = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"]
  
  const [form, setForm] = useState({
    email: '',
    username: '',
    nationality: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    nationality: '',
    password: ''
  })

  const changeHandler = (e) => {
    const property = e.target.name;
    let value = e.target.value;

    validate({...form, [property]: value})

    setForm({...form, [property]: value})
  }

  const validate = (form) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z]).{6,16}$/;

    const newErrors = {
      email: '',
      username: '',
      nationality: '',
      password: ''
    };

    let passed = true
    
    if(!emailRegex.test(form.email)) {
      newErrors.email = 'Ingrese un email válido';
      passed = false
    }

    if(!usernameRegex.test(form.username)) {
      newErrors.username = 'Tu usuario debe tener entre 3 y 16 caracteres y empezar con una letra';
      passed = false
    }
    
    if(!form.nationality) {
      newErrors.nationality = 'Elige tu país de origen';
      passed = false
    }
    
    
    if(!passwordRegex.test(form.password)) {
      newErrors.password = 'La contraseña debe tener entre 6 y 16 caracteres con al menos una mayúscula y un número';
      passed = false
    }

    setErrors(newErrors);

    return passed;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const isValid = validate(form);

    if(isValid) {
      axios.post('http://localhost:3001/user/sign-up', form)
        .then(() => {
          setForm({
            email: '',
            username: '',
            nationality: '',
            password: '',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className={`${styles.container} mx-auto`}>
      <img src="icon-nav.svg" alt="logo redsabor" />
      <div className="flex mt-8">
        <div>
          <p className={styles.title}>Únete <br /> a la mejor comunidad culinaria</p>
          <img src="cooking-img.svg" alt="imagen mujer cocinando" />
        </div>

        <div className={`${styles.formContainer} flex flex-col`}>
          <Link to='/' className="text-2xl font-bold">&larr; Regresar</Link>
          <form onSubmit={submitHandler} className={`${styles.formContainer} flex flex-col`}>
            <input type="text" placeholder="Ingresa tu email" name="email" value={form.email} onChange={changeHandler} />
            <input type="text" placeholder="Nombre de usuario" name="username" value={form.username} onChange={changeHandler} />
            <select name="nationality" value={form.nationality} onChange={changeHandler}>
                <option>Tu origen     &dArr;</option>
                {countryNames.map((country) => {
                  return <option key={country} value={country}>{country}</option>
                })}
            </select>
            <input type="password" placeholder="Ingresa tu contraseña" name="password" value={form.password} onChange={changeHandler} />
            <input type="password" placeholder="Confirma tu contraseña" />
            <button type="submit">Crear cuenta</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Register
