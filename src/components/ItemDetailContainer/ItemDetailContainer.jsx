import classes from "./ItemDetailContainer.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import LoadScreem from "../LoadScreem/LoadScreem"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(productId)
            .then((response) => {
                setProduct(response)
            })
            .catch(() => {
                console.log("error")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])


    if (loading) {
        return (
            <LoadScreem />
        )
    } else {
        return (
            <section className={classes.secDetail}>
                <h1 className={classes.titleDetail}>Detalle del producto</h1>
                <ItemDetail {...product} />
            </section>
        )
    }
}

export default ItemDetailContainer