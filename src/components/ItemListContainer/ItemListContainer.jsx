import classes from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadScreem from "../LoadScreem/LoadScreem"
import { getDocs, collection, where, query } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"



const ItemListContainer = ({ saludo }) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
        
        getDocs(collectionRef)
            .then((querySnapshot) => {

                const productsAdapted = querySnapshot.docs.map((doc) => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setProducts(productsAdapted)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


    if (loading) {
        return (
            <LoadScreem />
        )
    } else {
        return <section className={classes.secItemListContainer}>
            <h1 className={classes.titleItemListContainer}>{saludo}</h1>
            <ItemList products={products} />
        </section>
    }
}

export default ItemListContainer