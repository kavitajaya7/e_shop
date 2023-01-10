import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInWithUserWithEmailAndPassword
} from "../../utils/firebase.component";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultformatfields = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formfields, setformfield] = useState(defaultformatfields);
  const { email, password } = formfields;

  const resetFormField = () => {
    setformfield(defaultformatfields);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInWithUserWithEmailAndPassword(email , password);
      
      resetFormField();
    } catch (error) {
      switch(error.code){
        case ('auth/wrong-password') :
        alert('wrong users password');
        break;
        case('auth/user-not-found') :
        alert('wrong email');
        break;
        default :
        console.log(error.message);
      }
     

    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformfield({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> have an account</h2>
      <span>signIn with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          otherProp={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          otherProp={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>
          <Button buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
