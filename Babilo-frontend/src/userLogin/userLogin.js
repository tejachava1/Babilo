import React from "react";
import './userLogin.css';
import HomeHeader from "../Header/homeHeader";
function UserLogin() {
    return (
      <div>
        <HomeHeader/>

      <div className="UserLogin">
        <form className="login">
        <p className="login_box_p">User Login</p>
        <input type="text" className="user input" id="user_id"  placeholder=" User Name" required minlength="4" />
        <input type="passwordName" class="password_id input" id="password_id" placeholder=" Password" required minlength="4" />
        <button type = 'button' className="adminloginbtn" id="submit">Submit</button>

    </form>
    </div>
    </div>

    )
}

export default UserLogin;