import './item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item})=>{

    return(
        <div className='item'>

            <Link className='linkImg' to={`/item/${item.id}`}>
                <img src={item.image} alt={item.name}/>
            </Link>

            <h3>{item.name}</h3>
            <p>${item.price}</p>
            
            <Link to={`/item/${item.id}`}><button>Ver mas</button></Link>
            
        </div>
    );
};
export default Item;
