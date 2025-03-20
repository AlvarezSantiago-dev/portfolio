
import { AsideMenu } from "../AsideMenu/AsideMenu.jsx"
import { NavTabs } from "../MotionDiv/NavTabs"
import styles from "./layout.module.css"


export const LayOut = () => {
    return (
        <> 
        
        <div className={styles.mainapp}>
        <AsideMenu />
        <NavTabs />   
        </div>
       
        </>
        
    )
}
