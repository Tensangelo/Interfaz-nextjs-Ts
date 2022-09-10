import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

const Menu = () => {

    return (
        <section className={styles.navbar}>
            <ul>
            <li>
                <Link href={'/'}>
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href={'/characters/allCharacters'}>
                <a>Characters</a>
                </Link>
            </li>
            </ul>
        </section>
    )
}

export default Menu;
