import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
const CartWidget= ()=>{
    const {getTotalProducts} = useContext(CartContext)
    return(
        <div className="cartWidget_Container">
           <Link to='/carrito'><button className='cartWidget_button'><i className="fas fa-shopping-cart"></i>{getTotalProducts()}</button></Link>
            
            
        </div>
    )
}

export default CartWidget;