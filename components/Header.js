import headerstyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerstyles.title}>
                <span>
                    WebDev
                </span>
                News
            </h1>
            <p className={headerstyles.description}>
                lorem ipsum dolor sit
            </p>
        </div>
    )
}

export default Header
