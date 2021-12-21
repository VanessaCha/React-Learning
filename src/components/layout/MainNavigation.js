import { useContext } from "react";
import { Link } from 'react-router-dom';

import css from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={css.header}>
            <div className={css.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/fav'>
                            Favorites Meetups
                            <span className={css.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;