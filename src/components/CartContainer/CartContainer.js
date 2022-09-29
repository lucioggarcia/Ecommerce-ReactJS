import React, {useContext,useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartContainer.css'
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const CartContainer = ()=>{
    const {productCartList,removeItem,clear,getTotalPrice}= useContext(CartContext);
    const [idOrder,setIdOrder]=useState("")
    

    const sendOrder=(event)=>{
        event.preventDefault();

        const order = {

            buyer:{
                name:event.target[0].value,
                phone:event.target[1].value,
                email:event.target[2].value
            },
            items: productCartList,
            total: getTotalPrice()
        }

        const queryRef = collection(db,"orders");

        addDoc(queryRef,order).then(response=>{

            setIdOrder(response.id)
            clear();
        })

    }
    return(
        <div>
            {idOrder ?
                <>
                    <h2 style={{color:"white"}}>Su Orden fue creada con exito, ID: {idOrder}</h2>
                    <Link style={{color:"white",textDecoration:"none"}} to='/'>
                        - Ir al Listado de Productos -
                    </Link>
                </>
                :
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
                                <form  onSubmit={sendOrder}>
                                    <label style={{}}>Nombre: </label>
                                    <input type="text"/>
                                    <label>Telefono: </label>
                                    <input type="text"/>
                                    <label>Email: </label>
                                    <input type="email"/>
                                    <button type="submit">Enviar Orden</button>
                                </form>
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

            }
        </div>
        
    )
}