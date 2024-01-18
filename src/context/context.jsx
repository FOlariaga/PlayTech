import { createContext, useState, useContext } from "react"

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    isInCart: () => { },
    removeItem: () => { },
    quantityInCart: () => { }
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            console.log(productToAdd);
            setCart((prev) => {
                return [...prev, productToAdd]
            }
            )
        } else {
            console.log("el producto " + productToAdd.name + " ya se agrego al carrito")
        }
    }

    const isInCart = (productId) => {
        return cart.some((product) => product.id === productId)
    }

    const removeItem = (productId) => {
        const cartUpdate = cart.filter((product) => { 
            return product.id !== productId 
        })
        setCart(cartUpdate)
    }

    const quantityInCart = () => {
        let quantity = 0

        cart.forEach((product) => {
            quantity += product.quantity
        })

        return quantity
    }

    const getTotal = () => {
        let accumulated = 0

        cart.forEach((product) => {
            accumulated += product.quantity * product.price
        })

        return accumulated
    }

    // const total = getTotal()

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, quantityInCart, clearCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}