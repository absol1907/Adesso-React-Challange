import style from "./NavBar.module.scss"

const NavBar = () => {

    return (
        <nav>
        <ul className={style.navbar}>
            <li><a href="/">Home</a></li>
            <li><a href="/units">Units</a></li>
            
        </ul>
        </nav>
    )

}

export default NavBar;