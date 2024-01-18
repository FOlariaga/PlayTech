import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../../context/context"

const ItemDetail = ({ id, name, price, stock, category, image, description }) => {

    const { cart, addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {

        const objProductToAdd = { id, name, price, quantity }
        addItem(objProductToAdd)
    }



    return <section className={classes.product}>
        <div className={classes.image}>
            <img src={image} />
        </div>

        <div className={classes.info}>

            <h1>{name}</h1>
            <p className={classes.category}>categoria: {category}</p>
            <h3 className={classes.precio}>$ {price}</h3>
            {!isInCart(id) ?
                (<ItemCount stock={stock} onAdd={handleOnAdd} />)
                : (<Link to="/cart" className={classes.button} >Revisar pedido</Link>)}
            <p className={classes.stock}>productos disponibles: {stock} </p>
            <p className={classes.descripcion}>{description}</p>

        </div>

    </section>
}
export default ItemDetail