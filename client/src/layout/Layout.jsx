import { Header } from "./Header"
import { Outlet } from "react-router-dom"
// место для импорта footer\

import styles from "./Layout.module.css"

const Layout = () => {
    return (
        <>  
            <Header className={styles.container} />

            <main className={styles.container}>
                <Outlet />
            </main>


            {/* Пока что footer без компонента */}
            <footer className={styles.container}></footer>
        </>
    )
}

export default Layout