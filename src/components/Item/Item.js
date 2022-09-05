import './item.css'

const Item = ({id,name,description,price,image,stock})=>{

    return(
        <div className='item'>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            
        </div>
    );
};
export default Item;