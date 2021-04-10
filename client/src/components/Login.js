import {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setpass] = useState('');

    const loginUser = async (e) => {
      e.preventDefault();
      const res = await fetch('/signin',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        })
      })

      const data = res.json();
 
      if(!data.status === 200)
      {
        window.alert("email or password invalid")
      } else {
        window.alert("login success");
        history.push("/")
      }
    }
    return( 
        <>
        <section className="login">
          <div className="container mt-5">
            <div className="login-content">
              <div className="login-form">
              <h2 className="form-title mb-5">Login </h2>
              <form  method="post" className="register-form" id="register-form">
  
              <div className="form-group">
              <label htmlFor="email">
              <i class="zmdi zmdi-email"></i>
              </label>
              <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Your Email"
              required
              />
              </div>
  
  
              <div className="form-group">
              <label htmlFor="password">
              <i class="zmdi zmdi-lock"></i>
              </label>
              <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={(e) => setpass(e.target.value)}
              autoComplete="off"
              placeholder="Your Password"
              required
              />
              </div>
  
              <div className="form-group">
              <input 
              type="submit" 
              name="login"
              id="login" 
              value="login" 
              className="form-submit"
              onClick={loginUser}
              />
              </div>
  
              </form>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Login;