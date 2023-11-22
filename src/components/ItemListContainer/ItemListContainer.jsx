import classes from "./ItemListContainer.module.css"
const ItemListContainer = ({saludo}) =>{
    return <div className={classes.bienvenida}> 
        <h1>{saludo}</h1>
    </div>
}

export default ItemListContainer