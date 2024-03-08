import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";


const Home = () => {

  const token = useSelector(selectCurrentToken);
  
  return (
    <div>
      Home

      <p>{token}</p>
    </div>
  )
}

export default Home
