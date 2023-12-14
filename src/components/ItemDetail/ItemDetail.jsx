import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, price, stock, category,image, description}) => {
    return <section className={classes.product}>
        <div className={classes.image}>
        <img src={image}/>
        </div>

        <div className={classes.info}>

        <h1>{name}</h1>
        <p className={classes.category}>categoria: {category}</p>
        <h3 className={classes.precio}>$ {price}</h3>
        <ItemCount stock={stock}/>
        <p className={classes.stock}>productos disponibles: {stock} </p>
        <p className={classes.descripcion}>{description}</p>
        
        </div>
    
    </section>
}
export default ItemDetail