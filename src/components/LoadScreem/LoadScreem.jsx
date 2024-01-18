import classes from "./LoadScreem.module.css"

const LoadScreem = () => {
    return(
        <section className={classes.secLoadScreem}>
            <h1 className={classes.titleLoadScreem}>cargando . . .</h1>
            <div className= {classes.loading}>
                <img className={classes.pacman} src="/images/Pac-man_open.png" alt=""  />
                <img className={classes.pacmanClose} src="/images/Pac-man_close.png" alt="" />
                <div className={classes.pastilla}>.</div>
                <div className={classes.pastilla}>.</div>
                <div className={classes.pastilla}>.</div>
                <img className={classes.superPastilla} src="/images/super-pastilla.png" alt="" />
            </div>
        </section>
    )
}

export default LoadScreem