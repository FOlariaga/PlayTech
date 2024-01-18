import classes from "./ItemCount.module.css"
import { useState } from "react";

const ItemCount = ({ inicio = 1, stock = 1, onAdd }) => {
    const [count, setCount] = useState(inicio)

    const aumentar = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const disminuir = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return <><div className={classes.itemCount}>
        <div className={classes.contador}>
            <button onClick={disminuir}>-</button>
            <h1>{count}</h1>
            <button onClick={aumentar}>+</button>
        </div>
        <button className={classes.addCard} onClick={() => onAdd(count)}>agregar al carrito</button>
    </div>
    </>
}

export default ItemCount