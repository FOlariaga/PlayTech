# PlayTech 
## Inicialice el proyecto
Para empezar debe clonar su repositorio e instalar dependencias para que el proyecto funcione correctamente y poder visualizarlo
```sh
git clone https://github.com/FOlariaga/PlayTech.git
npm install 
npm run dev
```

##  Agrega una base de datos de firebase
para ello debera incorporar un archivo .env con las siguientes variables de entorno
```sh
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```
## PlayTech

permitira acceder a la coleccion products de la base de datos y creara una coleccion orders donde se almacenaran los datos cargados por el usuario a su vez que los productos que fue selecionando para su compra.
para su correcto funcionamiento cada producto de la base de datos debe tener:
```sh
category
description
image
name
price
stock
```
el funcionamiento es intuitivo y simple que permite navegar entre los siguientes parametros de url que se dirigira en orden para filtrar productos por categoria, visualizar el detalle del producto, agregar el producto, rellenar un formulario con datos de usuario y completar el pedido correctamente
```sh
/categoty/...
/cart
/chechout
```