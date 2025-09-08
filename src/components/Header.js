import React,{useEffect} from "react";
import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constatnt";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };


    useEffect(() => {
    const auth = getAuth();
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName,photoURL} = user;

        dispatch(addUser({uid:uid,email:email, displayName:displayName,photoURL:photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe()
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        alt="logo"
        className="w-44"
        src={LOGO}
      />

      {
       user &&( <div className="flex items-center p-2 gap-2">
          <img
            className="w-8 h-8 rounded-md"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
