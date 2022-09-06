import './item.css'
import ItemCount from '../ItemCount/ItemCount';
const Item = ({id,name,description,price,image,stock})=>{

    return(
        <div className='item'>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p>Stock Disponible: {stock}</p>
            <ItemCount stock= {stock} initial={0}/>
            
        </div>
    );
};
export default Item;