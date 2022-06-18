import React from "react";
import './userSignup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import HomeHeader from "../Header/homeHeader";
function UserSignup() {
  const navigate = useNavigate();
  const signup = () => {
    debugger
    let username = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let body = {
        name: username,
        password: password,
        emailId: email,
        phoneNumber: phone
    }
    
    axios.post('http://localhost:9090/user/userReg', body).then((response) => {
        console.log(response);
        if(response) {
          if(response.status == 201) {
            document.getElementById("user_name").value = '';
            document.getElementById("password").value ='';
            document.getElementById("email").value ='';
            document.getElementById("phone").value ='';
          }
            navigate('/userLogin');
        }
    })

}
    return (
      <div>
        <HomeHeader/>

      <div className="UserSignup">
          <form className="login">
        <p className="login_box_p">User Signup</p>
        <input type="text" className="user input" id="user_name"  placeholder=" User Name" required />
        <input type="passwordName" class="user password_id input" id="password" placeholder=" Password" required />
        <input type="text" className="user userEmail input" id="email"  placeholder="Email" required  />
        <input type="text" className="user phone input" id="phone"  placeholder="Phone Number"  />
        
        <button type = 'button' className="adminloginbtn" id="submit" onClick={()=> signup()}>Submit</button>

    </form>
    </div>
    </div>

    )
}

export default UserSignup;