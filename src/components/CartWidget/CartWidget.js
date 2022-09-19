import { Link } from "react-router-dom";
const CartWidget= ()=>{
    return(
        <div className="cartWidget_Container">
           <Link to='/carrito'><button className='cartWidget_button'><i className="fas fa-shopping-cart"></i></button></Link>
            
            
        </div>
    )
}

export default CartWidget;