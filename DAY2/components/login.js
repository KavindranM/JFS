import React from "react";
import "./login.css";
import {Link} from 'react-router-dom';

const LoginFi = () => {
    return (

        <div className="out">
            <h1>lalala</h1>
           <input type ="text" placeholder="UserName" />
           <input type ="password" placeholder="password" /> 
          <div className="button">
          <button variant='contained' type="submit">login</button>
          </div>

          <p className="text">Or login using</p>

          <div className="alt-log">
            <div className="fb"></div>
            <div className="gog"></div>
          </div>
          <h4 id="lower">Don't have an account? <Link to='/signup'>Sign Up</Link> </h4>
          <div>forgot password? click here</div>
          <div className="img12" ></div>
        </div>

    )
}
export default LoginFi;

 