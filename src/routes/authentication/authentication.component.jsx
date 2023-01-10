// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import './authentication.styles.scss'

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.component";

import { async } from "@firebase/util";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component.jsx";

const Auth = () => {
  // const myFunc = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // };

  // useEffect(() => {
  //   myFunc();
  // }, []);

 

  return (
    <div className="authentication-container">
    
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
    </div>
  );
};

export default Auth;
