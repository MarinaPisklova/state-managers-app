import { NavLink } from 'react-router-dom';
import styles from './MainPage.module.css';
import { modulesConfig } from '../../../modules';

const MainPage = () => {
    return (
        <div className={styles.page}>
            <h1>State managers apps</h1>
            <ul className={styles.list}>
                {modulesConfig.map(({ name, path, stack }) => (
                    <li className={styles.list_item} key={name}>
                        <NavLink to={path} className={styles.link}>
                            <h3>{name}</h3>
                            <p>{stack}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;
