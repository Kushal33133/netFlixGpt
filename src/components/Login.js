import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidateDate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
         import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"


const Login = () => {
    const navigate = useNavigate();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    const messgae = checkValidateDate(
      email.current.value,
      password.current.value
    );
    setErrorMessage(messgae);

    if (messgae) return;

    //Sign In SIgn UP Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIe_CMALvI-oVWy7OZ76Y5KBoeHGADJDysoHAPUnot4rrKkkeSZ=s396-c-no"
            }).then(() => {
               const {uid,email, displayName,photoURL} = auth.currentUser;
              
                dispatch(addUser({uid:uid,email:email, displayName:displayName,photoURL:photoURL}))
                      
              navigate("/browse")
            }).catch((error) => {
             setErrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage)
          // ..
        });
    } else {
            signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          console.log(user);
          navigate("/browse")
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage)
          // ..
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img
          alt="logo"
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-90 flex flex-col text-white bg-opacity-80 rounded-lg  "
      >
        <h1 className="text-3xl font-bold mb-4 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Nestflix? Sign Up Now"
            : "Already Register, Sing In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
