import { Link } from "react-router-dom";
import { auth } from "../../firebase";

interface HomeProps {
    name?: string;
}

const logout = () => {
    return auth.signOut()
    // navigate("/")
}

const Home = (props: HomeProps) => {
    
    return (
        <div>
            <div className="">
                <div className="">
                    <h1>
                        <Link to="/login">Login</Link>
                    </h1>
                    <br />
                    <h1>
                    <Link to="/singup">Sing up</Link>
                    </h1>
                </div>
            </div>
            <h2>{
                props.name? `Bienvenido ${props.name}` : "Inicia sesión"
            }</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home