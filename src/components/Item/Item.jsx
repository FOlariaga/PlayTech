import { Link } from "react-router-dom"
import classes from "./Item.module.css"

const Item = ({id,name,price,category,stock,image}) => {
    return <div className={classes.tarjeta}>
        <img src ={image} alt="" />
        <h2>{name} </h2>
        <p>categoria: {category}</p>
        <h3> $ {price} </h3>
        <Link className={classes.linkDetail} to={`/detail/${id}`}>Ver Detalle</Link>
    </div>
}

export default Item