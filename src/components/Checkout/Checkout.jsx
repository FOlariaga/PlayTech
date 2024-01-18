import { useState } from "react"
import { useCart } from "../../context/context"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import LoadScreem from "../LoadScreem/LoadScreem"

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
            <div>
                <h1>el numero de orden es {orderId}</h1>
                <h2>datos del Comprador:</h2>
                <h3>Nombre: {useData.name}</h3>
                <h3>Email: {useData.email}</h3>
                <h3>Telefono: {useData.phone}</h3>
            </div>

        </>
    }

    if (loading) {
        return <>
            <LoadScreem />
            <h1></h1>
        </>
    }

    return <div>
        <h1>Checkout</h1>

        {
            useData
                ? <>
                <h2>Sus datos se cargaron correctamente y puede generar su orden</h2>
                <button onClick={createOrder}> generar orden </button>
                </>
                : <form onSubmit={(ev) => {
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
                    <h2>nombre:</h2>
                    <input name="nombre" type="text" placeholder="Ingrese su nombre"/> <br />
                    <h2>email:</h2>
                    <input name="correo" type="email" placeholder="Ingrese su email"/> <br />
                    <h2>telefono celular:</h2>
                    <input name="celular" type="number" placeholder="Ingrese su telefono"/> <br />
                    <button type="submit"> cargar datos </button>
                </form>
        }

    </div>
}
export default Checkout