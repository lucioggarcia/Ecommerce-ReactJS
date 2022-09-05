import data from "./mock_data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer= ()=>{
    const[items,setItems]=useState([]);

    const getData= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    });

    useEffect(()=>{
        getData.then((result)=>{
            setItems(result);
        })
    },[]);

    return(
        <> 
            <div className="itemListContainer">{
                items.length>0 ? (<ItemList item={items}/>
                ): (
                <div>Cargando...</div>
                )
                }
            </div>

    
        </>
    )
}
export default ItemListContainer;
