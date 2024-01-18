import classes from "./LoadScreem.module.css"

const LoadScreem = () => {
    return(
        <section className={classes.secLoadScreem}>
            <h1 className={classes.titleLoadScreem}>cargando . . .</h1>
            <div className= {classes.loading}>
                <img className={classes.pacman} src="https://drive.google.com/file/d/1244vF7cWL4jvSSEynAUr17ulYJOln7K4/view" alt=""  />
                <img className={classes.pacmanClose} src="/public/images/Pac-man_close.png" alt="" />
                <div className={classes.pastilla}>.</div>
                <div className={classes.pastilla}>.</div>
                <div className={classes.pastilla}>.</div>
                <img className={classes.superPastilla} src="/public/images/super-pastilla.png" alt="" />
            </div>
        </section>
    )
}

export default LoadScreem