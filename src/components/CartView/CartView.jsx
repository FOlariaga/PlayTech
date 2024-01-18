import classes from "./CartView.module.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/context"

const CardView = () => {

    const { cart, removeItem, quantityInCart, getTotal } = useCart()

    return <>
        <h1>Carrito de compras</h1>
        <section>
            {cart.map((product) => {
                return <div className={classes.card} key={product.id}>
                    <h2>{product.name}</h2>
                    <h3>Cantidad: {product.quantity}</h3>
                    <h3>Precio unidad: ${product.price}</h3>
                    <h3>Subtotal: ${product.quantity * product.price}</h3>
                    <button onClick={() => removeItem(product.id)}>Eliminar</button>
                </div>
            })
            }
            <br />
            <hr />
            {cart.length > 0 ? <>
                <div>
                    <h1>Cantidad total de productos {quantityInCart()}</h1>
                    <h2>precio total {getTotal()}</h2>
                </div>
                <Link to="/checkout" >Realizar pedido</Link>
            </>
                : <>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">Agrega productos para poder realizar la orden</Link>
                </>
            }
        </section>

    </>

}

export default CardView