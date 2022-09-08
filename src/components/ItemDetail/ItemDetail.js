import { useEffect, useState } from "react";
import data from "../ItemListContainer/mock_data";
import './itemDetail.css'
const ItemDetail=()=>{
    
    const[item,setItems]=useState([]);
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
        item.map(element=>{
            if(element===data[0]){
                return(
                
                    <div className="contenedorDetail">
                        <div className="contenedor_img">
                            <img src= {element.image} alt={element.name}></img>
                        </div>
                        <div className="contenedor_datos">
                            <div className="datos_titulo">
                                <h3>{element.name}</h3>
                            </div>
                            <div className="datos_descripcion">
                                <p>{element.description}</p>
                            </div>
                            <div className="datos_precio">
                                <h4>${element.price}</h4>
                            </div>
                            <button>Agregar al carrito</button>
                        </div>
    
                    </div>
                )
            }
            
            
        })
    )

}
export default ItemDetail;