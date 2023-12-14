import classes from "./ItemListContainer.module.css"

import ItemList from "../ItemList/ItemList"
import {getProducts, getProductsByCategory} from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadScreem from "../LoadScreem/LoadScreem"


const ItemListContainer = ({saludo}) =>{

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    
    useEffect(() => {
        setLoading(true)

        const filter = categoryId ? getProductsByCategory : getProducts 

            filter(categoryId)
            .then( response => {
                setProducts(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    },[categoryId])

    if (loading) {
        return(
            <LoadScreem/>
        )

    }else {
        return <section className={classes.secItemListContainer}>
        <h1 className={classes.titleItemListContainer}>{saludo}</h1>
        <ItemList products={products}/>
        </section>
    }
}

export default ItemListContainer