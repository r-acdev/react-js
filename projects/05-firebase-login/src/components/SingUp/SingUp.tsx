import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";

const SingUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [errorMsg, setErrorMsg] = useState<string | string[]>([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const register = () => {
        if(!values.name || !values.email || !values.pass) {
            setErrorMsg(["All fields are required"]);
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(false);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name
            });
            navigate("/")
        })
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="">
            <div className="">
                <h1 className="">Register</h1>
                <InputControl
                    label="Name"
                    placeholder="Ingrese un nombre"
                    name="name"
                    onChange={handleChange}
                />
                <InputControl
                    label="Email"
                    placeholder="Ingrese un email"
                    name="email"
                    onChange={handleChange}
                />
                <InputControl
                    label="Password"
                    placeholder="Ingrese una contraseña"
                    name="pass"
                    onChange={handleChange}
                />
                <div className="">
                    {errorMsg && <p className="">{errorMsg}</p>}
                    <button 
                    onClick={register}
                    disabled={submitButtonDisabled}
                    className=""
                    >
                        Register
                    </button>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingUp