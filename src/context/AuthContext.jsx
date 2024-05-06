import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { toast } from "react-hot-toast";

const AuthContext = createContext();
const signUp = async (fullName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      try {
        await setDoc(userRef, {
          fullName,
          email,
          orders:[]
        });
        toast.success("account created successfully");
      } catch (err) {
        toast.error(err.message);
      }
    }
  } catch (err) {

    if (err.message == "Firebase: Error (auth/email-already-in-use).") {
      toast.error("email already in use");
    } else {
      toast.error(err.message);
    }
  }
};
const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successfully");
  } catch (err) {
    toast.error(err.message);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("logged out successfully");
  } catch (err) {
    toast.error("error while logging out");
  }
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
