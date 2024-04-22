import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [loading,setloading]=useState(false);
  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      setloading(true);
  
      const { data } = await axios.post('http://localhost:5001/login', {
         email, password
      }, config);
  
      console.log(data);
  
      if (data === 'Login successful') {
        // Redirect to registration form page
        navigate('/registrationForm');
      } else {
        // Handle registration failure
        alert('Login failed. Please try again.');
      }
  
      setloading(false);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-12'>

          <div className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <div className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <form onSubmit={handleLogin}>
                <div className='mb-4 w-100'>
                  <label htmlFor='email' className='form-label'>Email address</label>
                  <input
                    className='form-control form-control-lg'
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-4 w-100'>
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='mb-4 form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='rememberPassword'
                    checked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='rememberPassword'>Remember password</label>
                </div>
                <button className='btn btn-lg btn-primary w-100'>Login</button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* New row for the "New User" link */}
      <div className='row d-flex justify-content-center'>
        <div className='col'>
          <div className="text-center mt-3">
            <Link to="/signup">New User? Sign up here</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
