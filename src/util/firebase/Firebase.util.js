import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7LxlqPxr5-zrjTebEMgGJ30wwyupj6CQ",
  authDomain: "crown-clothing-db-8c978.firebaseapp.com",
  projectId: "crown-clothing-db-8c978",
  storageBucket: "crown-clothing-db-8c978.appspot.com",
  messagingSenderId: "156307979686",
  appId: "1:156307979686:web:a0c42d0ed7261e5e29e367",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
