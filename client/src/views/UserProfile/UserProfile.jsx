import styles from './UserProfile.module.css'

const UserProfile = () => {
  return (
    <div className="bg-slate-200 h-screen">
            <h1 className="text-3xl text-black font-bold text-center">User Page</h1>
            <h2> ⬅️ Regresar </h2>
            {/* deberia estar envuelto en una <Router></Router>   */}
            <div className="flex justify-start px-20 py-10 gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 "><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                <aside className="grid grid-cols-2 gap-2 ">
                    <strong className="text-orange-500">@usuario.cocina</strong>
                    <button className="rounded-2xl border-solid border-2 border-orange-500">Editar</button>
                    <p> x Recetas creadas </p>
                    <p>Descripcion de usuario</p>
                </aside>
            </div>
            <div className="flex px-20 py-10 flex-col ">
                <strong className="text-orange-500">Informacion del chef</strong>
                <p>Nacionalidad</p>
                <p>Informacion de recetas</p>
                <p>Informacion de recetas</p>
            </div>
            <div className="px-20">
                <strong className="text-orange-500">Mis recetas</strong>
                <article className="grid grid-cols-3 grid-rows-3 gap-4">
                    <div className="bg-amber-800 rounded-3xl">1</div>
                    <div className="bg-amber-800 rounded-3xl">2</div>
                    <div className="bg-amber-800 rounded-3xl">3</div>
                    <div className="bg-amber-800 rounded-3xl">4</div>
                    <div className="bg-amber-800 rounded-3xl">5</div>
                    <div className="bg-amber-800 rounded-3xl">6</div>
                </article>
            </div>

        </div>
  )
}

export default UserProfile
