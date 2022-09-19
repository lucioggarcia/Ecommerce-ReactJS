import data from "./mock_data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css'


const ItemListContainer= ()=>{
    const {categoryId}=useParams();
    
    const[items,setItems]=useState([]);

    const getData= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    });

    useEffect(()=>{
        getData.then(result=>{
            if(categoryId){
                const newProductos= result.filter(item=>item.category===categoryId)
                setItems(newProductos);
            }else{
                setItems(result);
            }
            
        })
    },[categoryId]);

    return(
        <div className="itemListContainer">{
            items.length>0 ? (<ItemList item={items}/>
            ): (
            <div style={{color:"white"}}>Cargando...</div>
            )
            }
        </div>
    )
}
export default ItemListContainer;

