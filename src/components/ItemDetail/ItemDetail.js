
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail=({item})=>{
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
                    <ItemCount stock= {item.stock} initial={0}/>
                </div>

                

                <button>Agregar al carrito</button>
            </div>

        </div>
    )
 }
 export default ItemDetail;