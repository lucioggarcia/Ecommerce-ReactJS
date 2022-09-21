
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail=({item})=>{
    const {addItem}= useContext(CartContext);

    const [contador,setContador]=useState(0);

    const onAdd=(dato)=>{
        setContador(dato);
        addItem(item,dato)
    }
    return(
        <div className="contenedorDetail">
            <div className="contenedor_img">
                <img src= {item.image} alt={item.name}></img>
            </div>

            <div className="contenedor_datos">
                <div className="datos_titulo">
                    <h3>{item.name}</h3>
                </div>

                <div className="datos_descripcion">
                    <p>{item.description}</p>
                </div>

                <div className="datos_precio">
                    <h4>${item.price}</h4>
                </div>
                <div className='datos_stock'>
                   
                    <p>Stock Disponible: {item.stock}</p>
                    <ItemCount stock= {item.stock} initial={1} onAdd={onAdd}/>
                    <p>{contador}</p>
                </div>
                <Link to='/'><button>Volver</button></Link>
                {
                    contador>0 &&
                    <Link to='/carrito'>Ir al Carrito</Link>
                }

            </div>

        </div>
    )
 }
 export default ItemDetail;