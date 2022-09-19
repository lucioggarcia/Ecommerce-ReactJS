import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartContainer.css'

export const CartContainer = ()=>{
    const {productCartList,removeItem,clear,getTotalPrice}= useContext(CartContext);
    return(
        <div className='porductCartList_container'>
            {
                productCartList.length>0 ?
                <div className='container_info' >
                    {productCartList.map(item=>(
                        <div className='info-data'>
                            <p>{item.name}</p>
                            <p> Cantidad: {item.quantity}</p>
                            <p>Precio unitario: $ {item.price}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                        </div>
                    ))}
                    <div className='container-totalprice'>
                        <button className='botonvaciar' onClick={clear}>Vaciar el carrito</button>
                        <p>Precio total: $ {getTotalPrice()}</p>
                    </div>
                     
                </div>
                :
                <>
                <p>El carrito esta vacio, Agrega algun producto</p>
                <Link className='linkproductos' to="/">
                    Ir al listado de productos
                </Link>
                </>
            }
          
        </div>
    )
}