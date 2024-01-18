import classes from "./ItemDetailContainer.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import LoadScreem from "../LoadScreem/LoadScreem"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const refDoc = doc(db, "products", productId)

        getDoc(refDoc)
            .then((QueryDocumentSnapshot) => {
                const fields = QueryDocumentSnapshot.data()
                const productAdapted = {id: QueryDocumentSnapshot.id, ...fields}

                setProduct(productAdapted)

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