import './RegisterForm.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm(){
    const [nameError, setNameError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [checkBoxError, setCheckBoxError] = useState(false);

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        check: false,
        name: "",
        userName: "",
        email: "",
        mobile: "",
      });
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      let state = true;
      if (!(userData.name.trim().length > 0)) {
        setNameError(true);
        state = false;
      } else {
        setNameError(false);
      }
      if (!(userData.userName.trim().length > 0)) {
        setUserNameError(true);
        state = false;
      } else {
        setUserNameError(false);
      }
      if (!(userData.email.trim().length > 0)) {
        setEmailError(true);
        state = false;
      } else {
        setEmailError(false);
      }
      if (!(userData.mobile.trim().length > 0)) {
        setMobileError(true);
        state = false;
      } else {
        setMobileError(false);
      }
      if (!userData.check) {
        setCheckBoxError(true);
        state = false;
      } else {
        setCheckBoxError(false);
      }
      if (state) {
        window.localStorage.setItem("userData", JSON.stringify(userData));
         navigate("/genre",{ replace: true });
      }
    };

    return(
        <div id="registerFormDiv">
         <p id="superApp">Super app</p>
         <p id="createAccount">Create your new account</p>
       
         <input type="text" name="name"  placeholder="Name"  onChange={(e) => handleChange(e)}></input>
         {nameError ? (
          <p className='errorText'>Field is required</p>
        ) : (
          <></>
        )}
         <input type="text" name="userName"  placeholder="userName"  onChange={(e) => handleChange(e)}></input>
         {userNameError ? (
          <p className='errorText'>Field is required</p>
        ) : (
          <></>
        )}
         <input type="email" name="email" placeholder="Email"  onChange={(e) => handleChange(e)}></input>
         {emailError ? (
          <p className='errorText'>Field is required</p>
        ) : (
          <></>
        )}
         <input type="tel" name="mobile" placeholder="Mobile"  onChange={(e) => handleChange(e)}></input>
         {mobileError ? (
          <p className='errorText'>Field is required</p>
        ) : (
          <></>
        )}
          <label>
          <input
            onChange={(e) =>
                setUserData({
                ...userData,
                [e.target.name]: e.target.checked,
              })
            }
            type="checkbox"
            name="check"
          />
          Share my registration data with Superapp
        </label>
        {checkBoxError ? <p className='errorText'>Check this box if you want to proceed</p> : <></>}
        <button 
         onClick={(e) => handleSubmit(e)} >
          SIGN UP
        </button>
        <p className='terms'>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
        <p className='terms'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp 
            <span> Privacy Policy</span></p>

        </div>
    );

}