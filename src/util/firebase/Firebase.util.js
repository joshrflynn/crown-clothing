import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7LxlqPxr5-zrjTebEMgGJ30wwyupj6CQ",
  authDomain: "crown-clothing-db-8c978.firebaseapp.com",
  projectId: "crown-clothing-db-8c978",
  storageBucket: "crown-clothing-db-8c978.appspot.com",
  messagingSenderId: "156307979686",
  appId: "1:156307979686:web:a0c42d0ed7261e5e29e367",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth();
const db = getFirestore();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;
  //gets a reference to the user doc, uses reference to pull doc from firestore
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //create user if not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      //set doc data using the reference
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      //display error messages
      console.log("Error generating user document object");
      console.log(err.messge);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
