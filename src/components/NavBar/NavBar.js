import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (
        <div className = 'NavBar_container'>

            <div className ='NavBar_logo'>
                <Link className='logo'to='/'><p>Lucho's clothes</p></Link>
            </div>

            <div className ='NavBar_categories_container'>
                <ul className ='NavBar_categories'>
                    <Link className='categories' to='/'><li>Home</li></Link>
                    <Link className='categories' to='/tienda/Pantalones'><li>Pantalones</li></Link>
                    <Link className='categories' to='/tienda/Remeras'><li>Remeras</li></Link>
                </ul>

            </div>
            <CartWidget/>


            <div className ='NavBar_login'>
                <button className='NavBar_button'>Login</button>
            </div>

        </div>
    )
};

export default NavBar;