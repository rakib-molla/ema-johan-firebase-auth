import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);
    const handleLogout = ()=>{
        logOut()
        .then(result =>{
            
        })
        .catch(error=>{
            console.log(error);
        })
    }

console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link  to="/signup">Sing Up</Link>
                {user && <span className='text-white'><span className='text-white'>{user.email}</span> <button  onClick={handleLogout}>SignOUt</button></span>}
            </div>
        </nav>
    );
};

export default Header;