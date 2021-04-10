import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        
    <div className="navbar navbar-expand-lg navbar-light bg-alert">
  <NavLink to="/" className="navbar-brand" >Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink  exact activeClassName="active-link" to="/" className="nav-link" >Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  exact activeClassName="active-link"  to="/profile" className="nav-link" >Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  exact activeClassName="active-link" to="/login" className="nav-link" >Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  exact activeClassName="active-link" to="/signup" className="nav-link" >Signup</NavLink>
      </li>
    </ul>
  </div>
</div>
        
    )
}

export default  Navbar;