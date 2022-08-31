import {useState} from "react";

function ItemCount({stock, initial}){
    const [count,setCount]=useState(initial)
    return(
        <div>
            <h3>Remera Verde, Cantidad: {count}</h3>
            <button onClick={()=>setCount(count+1)} disabled={count===stock}>+</button>
            <button onClick={()=>setCount(count-1)} disabled={count===0}>-</button>
        </div>
    )
}
export default ItemCount;