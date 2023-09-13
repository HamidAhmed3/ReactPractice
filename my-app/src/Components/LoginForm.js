import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  async function HandeLogin (e)  {
    // console.log(e);
    e.preventDefault();
    const login = {
      email: email,
      password: password
    };
    const response = await axios.post('http://localhost:3000/auth/login',login);
    console.log(response);
    // console.log(email,password)
  }



    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <h3 className="text-2xl font-bold text-center">Login to your account</h3>
      <form onSubmit={HandeLogin}>
          <div className="mt-4"> 
            <div>
              <label className="block" for="email">Email</label>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" >Login</button>
            </div>
          </div>
      </form>
        </div>
      </div>
    );
}

export default LoginForm;