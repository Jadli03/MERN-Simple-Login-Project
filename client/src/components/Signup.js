import {useState} from 'react';
import {useHistory} from 'react-router-dom';


const Signup = () => {
   const history = useHistory();
  const [user,setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password:"",
  }) 

  const inputData = (e) => {
     const  {name,value} =  e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

 const createUser = async (e) => {
    e.preventDefault();
    const {name,email,mobile,password} = user;

    const res = await fetch('/signup', {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      mobile,
      password,
    })
   })
   const data = await res.json();

   if(data.status === 400 || !data){
    window.alert("registration failed");
   }
   else{
    window.alert("account created");
    history.push("/login");
   }

  }
    
  

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
            <h2 className="form-title mb-5">Sign Up </h2>
            <form  method="post" className="register-form" id="register-form">
            <div className="form-group">
            <label htmlFor="name">
            <i class="zmdi zmdi-account"></i>
            </label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            autoComplete="off"
            placeholder="Your Name"
            value={user.name}
            onChange={inputData}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="email">
            <i class="zmdi zmdi-email"></i>
            </label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            autoComplete="off"
            placeholder="Your Email"
            value={user.email}
            onChange={inputData}
            required
            />
            </div>

            <div className="form-group">
            <label htmlFor="mobile">
            <i class="zmdi zmdi-phone"></i>
            </label>
            <input 
            type="tel"
            name="mobile" 
            id="mobile" 
            autoComplete="off"
            placeholder="Your mobile Number"
            value={user.mobile}
            onChange={inputData}
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
            autoComplete="off"
            placeholder="Your Password"
            value={user.password}
            onChange={inputData}
            required
            />
            </div>

            <div className="form-group">
            <input 
            type="submit" 
            name="signup"
            id="signup" 
            value="register" 
            className="form-submit"
            onClick={createUser}
            />
            </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
