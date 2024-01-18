import classes from "../Checkout/Checkout.module.css"
import { useState } from "react"
import { useCart } from "../../context/context"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import LoadScreem from "../LoadScreem/LoadScreem"
import { Link } from "react-router-dom"

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const [useData, setUseData] = useState()

    const [orderId, setOrderId] = useState()
    const { cart, clearCart } = useCart()

    let outOfStock = []

    const batch = writeBatch(db)

    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: useData.name,
                email: useData.email,
                phone: useData.phone
            },
            items: cart
        }

        const ids = cart.map(prod => prod.id)
        const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids))
        getDocs(productsCollection)
            .then((querySnapshot) => {
                querySnapshot.docs.forEach((doc) => {
                    const docData = doc.data()

                    const stockDb = docData.stock

                    const productAddedToCart = cart.find(prod => prod.id === doc.id)

                    const prodQuantity = productAddedToCart?.quantity

                    if (stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...docData })
                    }
                })


                if (outOfStock.length == 0) {
                    batch.commit()

                    const ordersCollection = collection(db, 'orders')
                    const orderIdGenerated = addDoc(ordersCollection, objOrder)
                        .then(Response => {
                            setOrderId(Response.id)
                        })

                    clearCart()
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(true)
            })
    }
    
    if (orderId) {
        return <>
            <div className={classes.cardOrder}>  
                <h1>El numero de orden es: " {orderId} "</h1>
                <h2 >Datos del Comprador:</h2>
                <div className={classes.dataForm}>
                <h3>Nombre: {useData.name}</h3>
                <h3>Email: {useData.email}</h3>
                <h3>Telefono: {useData.phone}</h3>
                </div>

                <Link className={classes.buttonReset} to="/">volver a la tienda</Link>
           </div>

        </>
    }

    if (loading) {
        return <>
            <LoadScreem />
        </>
    }

    return <div>
        <h1 className={classes.title}>Checkout</h1>

        {
            useData
                ? <div className={classes.orderGenerate}>
                    <h1>Buenas noticias!!!</h1>
                <h2>Sus datos se cargaron correctamente y puede generar su orden</h2>
                <button className={classes.button} onClick={createOrder}> generar orden </button>
                </div>
                : <form className={classes.form} onSubmit={(ev) => {
                    ev.preventDefault()
                    if (ev.target.nombre.value !== "" && ev.target.correo.value !== "" && ev.target.celular.value !== "" ) {
                        setUseData({
                            name: ev.target.nombre.value,
                            email: ev.target.correo.value,
                            phone: ev.target.celular.value
                        })
                    } else{
                        alert("llene todos los campos solisitados")
                    }
                }}>
                    <h2>Nombre:</h2>
                    <input name="nombre" type="text" placeholder="Ingrese su nombre"/> <br />
                    <h2>Email:</h2>
                    <input name="correo" type="email" placeholder="Ingrese su email"/> <br />
                    <h2>Telefono celular:</h2>
                    <input  name="celular" type="number" placeholder="Ingrese su telefono"/> <br />
                    <button className={classes.button} type="submit"> cargar datos </button>
                </form>
        }

    </div>
}
export default Checkout