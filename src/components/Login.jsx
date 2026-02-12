import { use, useState } from "react";
import { Validate } from "../utils/validate";
import { useRef } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignUP, setSignUp] = useState(true);
    const [errors, setErrors] = useState([]);


    const Email = useRef(null)
    const Password = useRef(null)

    const handleButtonClick = () => {
        const validationErrors = Validate(
            Email.current.value,
            Password.current.value
        );

        setErrors(validationErrors);

        if (validationErrors.length > 0) return;

        // console.log(" Login successful");

        if (!isSignUP) {
            createUserWithEmailAndPassword(auth, Email.current.value,
                Password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log("User created:", user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrors([`${errorCode}: ${errorMessage}`]);

                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, Email.current.value,
                Password.current.value)
                .then((userCredential) => {
                    console.log("User signed in:", userCredential.user);
                })
                .catch((error) => {
                    setErrors([error.code.replace("auth/", "").replace(/-/g, " ")]);
                });
        }

    };



    function toggleSign() {
        setSignUp(!isSignUP);
    }


    return (
        <div
            className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg')",
            }}
        >
            <form onSubmit={(e) => e.preventDefault()} action="" method="" className="flex flex-col w-[350px]  bg-black/70 p-8 rounded-md">
                <h1 className="text-[40px] mb-4" >{isSignUP ? "Sign In" : "Sign Up"}</h1>
                {!isSignUP && <input type="name"
                    placeholder="Full Name"
                    className="mb-3 p-3 rounded  "
                />}
                <input
                    ref={Email}

                    type="email"
                    placeholder="Email address"
                    className="mb-3 p-3 rounded  "
                />
                <input
                    ref={Password}
                    type="password"
                    onChange={() => setErrors([])}
                    placeholder="Password"
                    className="mb-3 p-3 rounded "
                />


                {errors.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-red-500">
                        {errors.map((err, index) => (
                            <li key={index}>• {err}</li>
                        ))}
                    </ul>
                )}

                <button className="text-white  font-semibold bg-[rgb(229,9,20)] mt-4" onClick={handleButtonClick}>{isSignUP ? "Sign In" : "Sign Up"}</button>
                <div className="flex items-center justify-between mt-1 text-sm text-gray-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="accent-red-600" />
                        <span>Remember me</span>
                    </label>

                    <p className="hover:underline cursor-pointer">
                        Need help?
                    </p>
                </div>
                <div className="text-sm text-gray-300 mt-20 ml-2">
                    New to Netflix? <span className="text-white ml-20 cursor-pointer " onClick={toggleSign}>{isSignUP ? "Sign UP Now" : "Sign In Now"}</span>
                </div>

            </form>
        </div>
    );
};

export default Login;
