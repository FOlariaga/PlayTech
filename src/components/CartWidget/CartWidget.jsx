import { Link } from "react-router-dom"
import imgLogo from "./assets/ImgCart.png"
import classes from "./CartWidget.module.css"
import { useCart } from "../../context/context";

const CartWidget = () => {

    const {quantityInCart} = useCart()
    
    return <Link to="/cart" className={classes.carrito}>
    <img className = {classes.cart} src={imgLogo} alt="imagen de carrito" />
    <p>{quantityInCart()}</p>
    </Link>
}

export default CartWidget