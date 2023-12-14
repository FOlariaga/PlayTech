import classes from "./ItemList.module.css"
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    if (products.length == 0) {
        return <h3>no se encontraron productos disponibles de esta categoria :(</h3>
    } else {
        return <div className={classes.ListProducts}>
            {
                products.map(product => {
                    return (
                        <Item key={product.id} {...product} />
                    )
                })
            }
        </div>
    }
}

export default ItemList