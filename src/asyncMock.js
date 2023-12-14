const products = [
    {
        id:1,
        name: "Baldur’s Gate 3",
        price: 25481.49,
        category: "videojuegos",
        stock: 9,
        image:  "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png",
        description: "Baldur’s Gate III es un videojuego de rol desarrollado por Larian Studios."

    },

    {
        id:2,
        name: "PlayStation 5",
        price: 1189999.99,
        category: "consolas",
        stock:4,
        image: "/public/images/console_PlayStation-5.jpeg",
        description: "CONSOLA PLAYSTATION 5 PS5 SONY CFI-1215A 825 GB STANDARD"

    },
    
    {
        id:3,
        name: "Marvel’s Spider-Man 2",
        price: 25479.99,
        category: "videojuegos",
        stock: 7,
        image: "/public/images/game_Spider-man-2.jpeg",
        description: "Marvel's Spider-Man 2 es un videojuego de acción y aventuras desarrollado por Insomniac Games y publicado por Sony Interactive Entertainmen"

    },

    {
        id:4,
        name: "Joystick PS5",
        price: 116398.99,
        category: "accesorios",
        stock: 6,
        image: "https://tienda2.ledvideojuegosycomputacion.com.ar/4587-home_default/joystick-ps5-sony-dualsense-original-rojo.jpg",
        description: "Joystick PS5 Sony Dualsense Original Rojo"

    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500);
    })   
}

export const getProductById = (itemId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id == itemId))
        }, 500);
    })   
}