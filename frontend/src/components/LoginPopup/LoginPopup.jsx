import React, {   useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"
import { useContext } from 'react'


const LoginPopup = ({setShowLogin}) => {

  
    const {url,setToken} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    
    })
    useEffect(() => {
     console.log(data)
    },[data])

    const onChangeHandler = (event) => {
      const {name,value} = event.target;
      setData(data => ({...data,[name]:value}))

    }
    const onLogin = async (event) => {
      event.preventDefault()
      let newUrl = url;
      if (currentState ==="Login") {
        newUrl += "/api/user/login"
        
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
        
        
      }else{
        alert(response.data.message);
      }




    }
    

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img  onClick ={() => setShowLogin(false)}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState ==="Login"?<></>:<input name = 'name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email'required />
            <input name='password'  onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required/>
        </div>
        <button type='submit' class = "btn">{currentState ==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-propup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use privacy policy</p>
        </div>
        {currentState === "Login"?  <p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> : <p>Alredy have an account?<span onClick={() => setCurrentState("Login")}>Login Here</span></p> }
   
    
      </form>
    </div>
  )
}

export default LoginPopup
