import {NavLink} from 'react-router-dom';
const Error = () => {
    return (
        <>
        <div className="error-flex-container">
            <div className="notfound">
                <h1>404</h1>
            </div>
            <h2>page not found </h2>
            <NavLink to="/"> back to homepage</NavLink>
        </div>
        </>
    )
}

export default Error;