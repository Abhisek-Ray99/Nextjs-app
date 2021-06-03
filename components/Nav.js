import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>back to Home</Link>
                </li>
                <li>
                    <Link href='/about'>back to About</Link>
                </li>
                <li>
                    <a href={process.env.MY_PORTFOLIO_URL}>
                        My Link
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
