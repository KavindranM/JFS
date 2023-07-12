import React from "react";
import { Link } from "react-router-dom";
function SignUp(){
    return (

        <div className="out">
            <h1>lalala</h1>
           <input type ="text" placeholder="FirstName" />
           <input type ="text" placeholder="LastName" />
           <input type ="password" placeholder="Setpassword" /> 
           <input type ="password" placeholder="re enter password"/>
          
          <div className="btn-log">login</div>
          <h4>Don't have an account? <Link to='/'>Sign Up</Link></h4>
          <div>forgot password? click here</div>
          <div className="img12" ></div> 
        </div>

    )
}
export default SignUp;

