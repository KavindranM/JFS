
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  // State variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [password, setPassword] = useState("");

  // Use the useHistory hook to navigate to the login page
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async () => {
    // Validate form fields
    if (!name) {
      alert("Please enter your name");
      return;
    }
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!phno) {
      alert("Please enter your phone number");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }

    // Make a POST request to your STS endpoint with form data
    try {
      const response = await axios.post('http://localhost:8081/api/v1/user/post', {
        uname: name,
        email: email,
        phnno: phno,
        password: password,
      });

      // Handle the response from the server (if needed)
      console.log("Response from server:", response.data);
      
      // Navigate to the login page after successful sign-up
      navigate.push("/");

      // Reset the form fields after successful submission
      setName("");
      setEmail("");
      setPhno("");
      setPassword("");
    } catch (error) {}
  };

  return (
    <div className="out">
      <h1>lalala</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="phno"
        value={phno}
        onChange={(e) => setPhno(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Use a button element for form submission */}
      <button type="submit" className="btn-log" onClick={handleSubmit}>
        Sign up
      </button>

      <h4>
        Already have an account? <Link to="/login">Sign in</Link>
      </h4>

      <div className="img12"></div>
    </div>
  );
}

export default SignUp;
