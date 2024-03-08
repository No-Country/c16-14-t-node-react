import { Route, Routes, useLocation } from 'react-router-dom';
import { CreateDish, Home, Login, Register, UserProfile } from './views';
import NavBar from './components/NavBar/NavBar';
import RequireAuth from './features/auth/RequireAuth';

function App() {

  const locaction = useLocation().pathname;

  return (
    <>
      {locaction === '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='/newdish' element={<CreateDish />} />
          <Route path='/profile' element={<UserProfile />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
