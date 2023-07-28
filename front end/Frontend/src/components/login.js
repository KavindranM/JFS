import React, { useState } from "react";
import axios from 'axios';
import "./login.css";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from "../redux/userslice";
import { useDispatch } from "react-redux";
//const navigate= useNavigate();
const LoginFi = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
const dispatch=useDispatch();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/user/post', { username, password });
           //navigate.push('/home');
            // handle successful login
        } catch (error) {
            // handle login error
        }
        dispatch(login({username}));
    }

    return (
        <div className="out">
            <h1>lalala</h1>
           <input type ="text" placeholder="UserName" onChange={e => setUsername(e.target.value)} />
           <input type ="password" placeholder="password" onChange={e => setPassword(e.target.value)} /> 
          <div className="button">
          <button variant='contained' type="submit" onClick={handleLogin}><Link to='/home'>login</Link></button>
          </div>

          <p className="text">Or login using</p>

          <div className="alt-log">
            {/* <div className="fb"></div>
            <div className="gog"></div> */}
          </div>
          <h4 id="lower">Don't have an account? <Link to='/signup'>Sign Up</Link> </h4>
          <div>forgot password? <a href="^">click here</a></div>
          <div className="img12" ></div>
        </div>
    )
}
export default LoginFi;

// import React from "react";
// import "./login.css";
// import {Link} from 'react-router-dom';

// const LoginFi = () => {
//     return (

//         <div className="out">
//             <h1>lalala</h1>
//            <input type ="text" placeholder="UserName" />
//            <input type ="password" placeholder="password" /> 
//           <div className="button">
//           <button variant='contained' type="submit">login</button>
//           </div>

//           <p className="text">Or login using</p>

//           <div className="alt-log">
//             <div className="fb"></div>
//             <div className="gog"></div>
//           </div>
//           <h4 id="lower">Don't have an account? <Link to='/signup'>Sign Up</Link> </h4>
//           <div>forgot password? <a href="^">click here</a></div>
//           <div className="img12" ></div>
//         </div>

//     )
// }
// export default LoginFi;

 