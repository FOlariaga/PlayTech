import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemNavbar from '../ItemNavbar/ItemNavbar'

const Navbar = function () {
    return <>
        <nav className={classes.navbar}>
            <a href="">
                <div className={classes.logo}>
                    <h1>PlayTech</h1>
                </div>
            </a>
            <div className={classes.conteiner}>
            <ul className={classes.itemNavbar}>
                <ItemNavbar text="inicio"/>
                <ItemNavbar text="productos"/>
                <ItemNavbar text="contacto"/>
            </ul>
                <CartWidget/>
            </div>
        </nav>
    </>
}

export default Navbar