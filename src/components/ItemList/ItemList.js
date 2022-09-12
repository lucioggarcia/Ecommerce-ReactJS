import Item from "../Item/Item";
import './itemList.css'
 
const ItemList = ({item})=>{

    return(
        <div className="itemList">
                {item.map(producto=>(
                   
                   <Item key={producto.id} item={producto}/>
                    
                ))}
        </div>
    );
};
export default ItemList;




