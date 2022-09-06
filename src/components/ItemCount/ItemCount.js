import {useState} from "react";
import './itemCount.css'

function ItemCount({stock, initial}){
    const [count,setCount]=useState(initial)
    return(
        <div className="itemCount">
            
            <button onClick={()=>setCount(count-1)} disabled={count===0}>-</button>
            <button onClick={()=>setCount(count+1)} disabled={count===stock}>+</button>
            <p>Cantidad: {count}</p>
        </div>
    )
}
export default ItemCount;