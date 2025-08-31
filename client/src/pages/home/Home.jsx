import styles from './Home.module.css'

export const Home = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero_text}>
                <h1>Учитесь Программированию Из любой точки Мира</h1>
                <p>
                    Откройте для себя лучший курс программирования. Изучайте программирование.
                </p>
            </div>
            <figure>
                <img src="/heroImage.png" alt="dizzy-education" />
            </figure>
        </section>
    )
}