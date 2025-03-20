import styles from "./navbar.module.css"

const tabs = [
    { id: 'tab1', title: 'About', content: "1", icon: "1" },
    { id: 'tab2', title: 'Resume', content: "2", icon: "2" },
    { id: 'tab3', title: 'Works', content: "3", icon: "3" },
    { id: 'tab4', title: 'Contact', content: "4", icon:"4" },
];

export const NavBar = () => {
    return (
        <header>
            <div className={styles.mainmenu}>
            <nav>
                <ul>
                    <li>
                        <a href="">About</a><span><i></i></span>
                        <a href="">Resume</a><span><i></i></span>
                        <a href="">Works</a><span><i></i></span>
                        <a href="">Contact</a><span><i></i></span>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
