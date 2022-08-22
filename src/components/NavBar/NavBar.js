import './NavBar.css'
const NavBar = () =>{
    return (
        <div className = 'NavBar_container'>

            <div className ='NavBar_logo'>
                <p>Lucho's clothes</p>
            </div>

            <div className ='NavBar_categories_container'>
                <ul className ='NavBar_categories'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Calzado</a></li>
                    <li><a href="#">Indumentaria</a></li>
                </ul>

            </div>

            <div className ='NavBar_login'>
                <button className='NavBar_button'>Login</button>
            </div>

        </div>
    )
};

export default NavBar;