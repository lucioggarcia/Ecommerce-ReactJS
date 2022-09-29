
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './itemListContainer.css'
import { db } from "../../utils/firebase";
import { collection, getDocs,query,where } from "firebase/firestore";


const ItemListContainer= ()=>{
    const {categoryId}=useParams();
    
    const[items,setItems]=useState([]);

    useEffect(()=>{
        const queryRef = !categoryId ?  collection(db,"items") : query(collection(db,"items"),where("category","==",categoryId));

        getDocs(queryRef).then(response=>{

            const resultados = response.docs.map(doc=>{
                const newItem={
                    id:doc.id,
                    ...doc.data()
                }
                return newItem
            });

            setItems(resultados)
        })

    },[categoryId])

    return(
        <div className="itemListContainer">{
            items.length>0 ? (<ItemList item={items}/>
            ): (
            <div style={{color:"white"}}><h3>Cargando...</h3></div>
            )
            }
        </div>
    )
}
export default ItemListContainer;

