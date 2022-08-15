import { createContext, useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
const authContext = createContext();
export default authContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log("Logged in with: ", user.email);
    } catch (e) {
      alert('Please enter correct details');
    }
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log("Registered in with:", user.email);
    } catch (e) {
        
      alert('Please check your inputs and try again');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  const forgotpassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (e) {
      alert('e.message');
    }
  }

  return (
    <authContext.Provider value={{ login, register, user, setUser, logout, forgotpassword }}>
      {children}
    </authContext.Provider>
  );
};
