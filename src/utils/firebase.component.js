import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInwithPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHL8LXFnbTL750v5IT6akkdr3BeXqb8Zg",
  authDomain: "closet-shopping.firebaseapp.com",
  projectId: "closet-shopping",
  storageBucket: "closet-shopping.appspot.com",
  messagingSenderId: "652539085939",
  appId: "1:652539085939:web:b1e994d80513254c599606",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if user doesnot exit 

  if(!userSnapshot.exists()) {
    const {displayName  , email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef , {
        displayName,
        email,
        createdAt
      });
    } catch(error){
       console.log('error creating the user' , error.message)
    }
  }

  return userDocRef;

};
