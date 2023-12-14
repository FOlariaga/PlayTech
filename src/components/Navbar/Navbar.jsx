import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()

    return <>
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <h1 onClick={() => { navigate("/") }}>PlayTech</h1>
            </div>
            <div className={classes.conteiner}>
                <div className={classes.itemNavbar}>
                    <Link to="/category/videojuegos">Videojuegos</Link>
                    <Link to="/category/consolas">consolas</Link>
                    <Link to="/category/accesorios">accesorios</Link>
                    <Link to="/category/decoraciones">decoraciones</Link>
                </div>
                <CartWidget />
            </div>
        </nav>
    </>
}

export default Navbar