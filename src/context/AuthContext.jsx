import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
// import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { getUser } from "../redux/addProductsSlice";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const dispatch = useDispatch();
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function userData() {
    return onAuthStateChanged(auth, (user) => {
      dispatch(getUser(user));
    });
  }

  useEffect(() => {
    const unsubscribe = userData();
    return () => unsubscribe();
  }, []);

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    userData();
  }, []);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //   let googleProvider = new GoogleAuthProvider();
  //   async function signInWithGoogle() {
  //     try {
  //       return await signInWithPopup(auth, googleProvider);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  let values = {
    register,
    logOut,
    logIn,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
