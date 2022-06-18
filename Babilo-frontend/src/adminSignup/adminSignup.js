import React from "react";
import './adminSignup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import HomeHeader from "../Header/homeHeader";

function AdminSignup() {
    const navigate = useNavigate();
    const signup = () => {
        debugger
        let adminid = 2
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

        axios.post('http://localhost:9090/admin/adminReg', body).then((response) => {
            console.log(response);
            if(response) {
                navigate('/adminLogin')
            }
        })

    }
    return (
        <div>
            <HomeHeader/>
        <div className="">
            <form className="login">
                <p className="login_box_p">Admin Signup</p>

                < input type="text" className="user input" id="user_name" placeholder=" User Name" required />
                <input type="passwordName" class="user password_id input" id="password" placeholder=" Password" required />
                <input type="text" className="user userEmail input" id="email" placeholder="Email" required />
                <input type="text" className="user phone input" id="phone" placeholder="Phone Number" />
                <button type='button' className="adminsignupbtn" id="submit" onClick={()=> signup()}>Submit</button>


            </form>
         
        </div>
        </div>
    )
}

export default AdminSignup;