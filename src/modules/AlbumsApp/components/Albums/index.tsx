import { useStore } from '../../stores';
import AlbumsList from '../AlbumsList/AlbumsList';
import styles from './Albums.module.css';
import { observer } from 'mobx-react-lite';

const Albums = () => {
    const { app } = useStore();

    const filterAlbums = (e: any) => {
        if (!app.searchQuery.trim()) {
            return true;
        }
        return new RegExp(app.searchQuery, 'i').test(e.title);
    };

    return (
        <>
            <input
                placeholder="Начните вводить название альбома"
                className={styles.input}
                onChange={(e) => app.handleSearchQueryChange(e.target.value)}
            />
            <AlbumsList filter={filterAlbums} />
        </>
    );
};

export default observer(Albums);
