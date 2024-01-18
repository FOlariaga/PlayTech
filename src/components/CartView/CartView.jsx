import classes from "./CartView.module.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/context"

const CardView = () => {

    const { cart, removeItem, quantityInCart, getTotal } = useCart()

    return <>
        <h1 className={classes.titleCart}>Carrito de compras</h1>
        <section >
            {cart.map((product) => {
                return <div className={classes.cart} key={product.id}>
                    <h2>{product.name}</h2>
                    <h3>Cantidad: {product.quantity}</h3>
                    <h3>Precio unidad: ${product.price}</h3>
                    <h3>Subtotal: ${product.quantity * product.price}</h3>
                    <button className={classes.buttonRemove} onClick={() => removeItem(product.id)}>Eliminar</button>
                </div>
            })
            }
            {cart.length > 0 ? <>
                <div className={classes.total}>
                    <h2>Cantidad total de productos: {quantityInCart()}</h2>
                    <h2>precio total: {getTotal()}</h2>
                    <Link className={classes.order} to="/checkout" >Realizar pedido</Link>
                </div>
            </>
                : <div className={classes.stockNull}>
                    <h1 className={classes.titleStockNull}>No hay productos en el carrito</h1>
                    <Link className={classes.button} to="/">Precione aqui para empezar a agregar productos </Link>
                </div>
            }
        </section>

    </>

}

export default CardView