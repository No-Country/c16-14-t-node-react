import { useState } from 'react';
import styles from './CreateDish.module.css'
import { Link } from 'react-router-dom';

const DishForm = () => {

  const countryNames = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"]

  const [inputValueIng, setInputValueIng] = useState('');
  const changeInputHandler = (e) => {
    setInputValueIng(e.target.value);
  }

  const [inputValueStep, setInputValueStep] = useState('');
  const changeInputStepHandler = (e) => {
    setInputValueStep(e.target.value);
  }

  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    ingredients: ingredients, 
    steps: steps,
    type: '',
    region: ''
  });



  const addStepHandler = () => {
    if (inputValueStep.trim() !== '') {
      setSteps(prevSteps => [...prevSteps, inputValueStep]);
      setInputValueStep('');
      setForm({...form, steps: [...steps, inputValueStep]})
    }
  }

  const removeStep = (step) => {
    const updatedSteps = steps.filter(elem => elem !== step);
    setSteps(updatedSteps)
    // validate({...form, ingredients: updatedIngredients})
    setForm({...form, steps: updatedSteps})
  }

  const addIngredientHandler = () => {
    if (inputValueIng.trim() !== '') {
      setIngredients(prevIngredients => [...prevIngredients, inputValueIng]);
      setInputValueIng('');
      setForm({...form, ingredients: [...ingredients, inputValueIng]})
    }
  }

  const removeIngredient = (ingredient) => {
    const updatedIngredients = ingredients.filter(elem => elem !== ingredient);
    setIngredients(updatedIngredients)
    // validate({...form, ingredients: updatedIngredients})
    setForm({...form, ingredients: updatedIngredients})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
  };

  return (
    <div className={`${styles.container} mx-auto`}>
      <Link to='/'>
        <img src="icon-nav.svg" alt="logo redsabor" /> {/**acá va la navbar o algo modificado */}
      </Link>
     
      <div className={`${styles.formContainer} flex flex-col mt-10`}>
        <p className="text-3xl font-bold mb-4">Crea tu receta</p>

        <form onSubmit={handleSubmit} className={`flex flex-col ${styles.form}`}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className='flex flex-col'>
            <label>Descripción: </label>
            <textarea name="description" cols="50" rows="3" maxLength={150} placeholder='Descripción, hasta 150 caracteres' onChange={handleChange}></textarea>
          </div>

          <fieldset>
            <label>Caracteristica principal: </label><br/>
            
            <input type="radio" id='ninguna' name="type" value="Ninguna" onChange={handleChange} />
            <label htmlFor='ninguna'>Ninguna</label><br/>

            <input type="radio" id='vegetariano' name="type" value="Vegetariano" onChange={handleChange} />
            <label htmlFor='vegetariano'>Vegetariano</label><br/>

            <input type="radio" id='bajoazucar' name="type" value="Bajo en azúcar" onChange={handleChange} />
            <label htmlFor='bajoazucar'>Bajo en azúcar</label><br/>

            <input id='bajograsa' type="radio" name="type" value="Bajo en grasas" onChange={handleChange} />
            <label htmlFor='bajograsa'>Bajo en grasas</label><br/>

            <input id='libregluten' type="radio" name="type" value="Libre de gluten" onChange={handleChange} />
            <label htmlFor='libregluten'>Libre de gluten</label><br/>
          </fieldset>

          <div>
            <label>Ingredientes:</label>
            <div className='flex'>
              <input type="text" value={inputValueIng} onChange={changeInputHandler} placeholder='Ingrese la cantidad y el ingrediente' />
              <button onClick={addIngredientHandler}>Agregar</button>
            </div>

            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index} className='flex'>
                  <img src="forks.svg" alt="icono cubiertos" />
                  {ingredient}
                  <button type="button" onClick={() => removeIngredient(ingredient)}>X</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label>Pasos para preparar el plato:</label>

            <div className='flex'>
              <textarea name="step" value={inputValueStep} onChange={changeInputStepHandler} cols="50" rows="3" placeholder='Describa el paso a seguir'></textarea>
              <button onClick={addStepHandler}>Agregar</button>
            </div>

            <ul>
              {steps.map((step, index) => (
                <li key={index}>
                  <h3>Paso {index + 1}</h3>
                  <div className='flex'>
                    <img src="dish-icon.svg" alt="icono plato" />
                    {step}
                    <button type="button" onClick={() => removeStep(step)}>X</button>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label>Region de la receta</label>
            <select name="region" value={form.region} onChange={handleChange}>
                <option>Origen     &dArr;</option>
                {countryNames.map((country, index) => {
                  return <option key={index} value={country}>{country}</option>
                })}
            </select>
          </div>

          <button type="submit">Subir</button>
        </form>
      </div>
    </div>
    
  );
};

export default DishForm;
