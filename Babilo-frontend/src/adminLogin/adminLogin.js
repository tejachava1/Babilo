import React from "react";
import './adminLogin.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import HomeHeader from "../Header/homeHeader";
function AdminLogin() {
  const adminSIgnin = () => {
    debugger
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let body = {
        emailId: email,
        password: password,
    }
    
    axios.post(`http://localhost:9090/admin/adminLogin/${body.emailId}/${body.password}`).then((response) => {
        console.log(response);
        if(response) {
          if(response.status == 201) {
            document.getElementById("password").value ='';
            document.getElementById("email").value ='';
          }
            // navigate('/adminLogin')
        }
    })

}
    return (
      <div>
        <HomeHeader/>

      <div className="AdminLogin">
        <form className="login">
        <p className="login_box_p">Admin Login</p>
        <input type="text" className="user input" id="email"  placeholder="Email Id" required minlength="4" />
        <input type="passwordName" class="password_id input" id="password" placeholder=" Password" required minlength="4" />
        <button type = 'button' className="adminloginbtn" id="submit" onClick={()=> adminSIgnin()}>Submit</button>

    </form>
    </div>
    </div>

    )
}

export default AdminLogin;