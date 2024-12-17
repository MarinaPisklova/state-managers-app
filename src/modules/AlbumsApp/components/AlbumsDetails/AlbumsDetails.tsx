import { useQuery } from 'react-query';
import { NavLink, useParams } from 'react-router';
import AlbumsListItem from '../AlbumsListItem/AlbumsListItem';
import styles from './AlbumsDetails.module.css';
import { getPhotos } from '../../Api';

const AlbumsDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useQuery(['albums-detail', id], getPhotos(id || ''), {
        staleTime: 600000,
    });

    if (!id) {
        return null;
    }

    return (
        <>
            <NavLink to="/albums" className={styles.navbar}>
                &lt; Вернуться к списку альбомов
            </NavLink>

            {!isLoading && (
                <>
                    <p>Детали альбома</p>
                    <AlbumsListItem title={data.title} id={data.id} url={data.photos[0].url} />
                    <p>Фотографии</p>
                    <ul className={styles.list}>
                        {data.photos.map((photo: { url: string | undefined }) => (
                            <img src={photo.url} alt="" width="96" height="96" />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default AlbumsDetails;
