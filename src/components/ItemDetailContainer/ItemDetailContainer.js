import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc,getDoc } from "firebase/firestore";

 const ItemDetailContainer=()=>{

    const {productId}=useParams();

    const[item,setItems]=useState([]);


    useEffect(()=>{

        const getProducto = async()=>{
            const queryRef = doc(db,"items",productId);
            const response = await getDoc(queryRef);

            const newItem = {
                id: response.id,
                ...response.data()
            }
            setItems(newItem)
        }
        getProducto();

    },[productId])

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}
export default ItemDetailContainer;
