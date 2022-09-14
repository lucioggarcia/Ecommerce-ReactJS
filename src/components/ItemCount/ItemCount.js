import {useState} from "react";
import './itemCount.css'

function ItemCount({stock, initial,onAdd}){
    const [count,setCount]=useState(initial)
    return(
        <div className="itemCount">
            
            <button onClick={()=>setCount(count-1)} disabled={count===0}>-</button>
            <button onClick={()=>setCount(count+1)} disabled={count===stock}>+</button>
            <p>Cantidad: {count}</p>
            <button onClick={()=>onAdd(count)} disabled={stock===0} >Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;