import {useState} from "react";
import './itemCount.css'

function ItemCount({stock, initial}){
    const [count,setCount]=useState(initial)
    return(
        <div className="itemCount">
            <h3>CONTADOR DESAFIO:</h3>
            <h3>Remera Verde, Cantidad: {count}</h3>
            <button onClick={()=>setCount(count+1)} disabled={count===stock}>+</button>
            <button onClick={()=>setCount(count-1)} disabled={count===0}>-</button>
        </div>
    )
}
export default ItemCount;