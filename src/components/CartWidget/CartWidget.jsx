import imgLogo from "./assets/ImgCart.png"
import classes from "./CartWidget.module.css"
const CartWidget = () => {
    return <button className={classes.carrito}>
    <img className = {classes.cart} src={imgLogo} alt="imagen de carrito" />
    <p>0</p>
    </button>
}

export default CartWidget