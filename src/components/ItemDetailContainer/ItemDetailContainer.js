import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import data from "../ItemListContainer/mock_data";
import { useParams } from "react-router-dom";

 const ItemDetailContainer=()=>{

    const {productId}=useParams();

    const[item,setItems]=useState([]);

    const getItem= (id)=>{
        return new Promise((resolve,reject)=>{
            const product=data.find(item=>item.id===parseInt(id))
            resolve(product);
           
        });
    }

    useEffect(()=>{
        const getProducto=async()=>{
            const producto=await getItem(productId);
            setItems(producto)
        }
        getProducto();
       
    },[productId]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}
export default ItemDetailContainer;
