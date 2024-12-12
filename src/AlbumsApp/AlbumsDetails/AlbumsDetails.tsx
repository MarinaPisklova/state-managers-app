import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPhotos } from '../Api';
import styles from './AlbumsDetails.module.css';
import AlbumsListItem from '../AlbumsListItem/AlbumsListItem';

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
            <Link to="/" className={styles['nav-bar']}>
                &lt; Back to the Pokedex
            </Link>
            {!isLoading && (
                <AlbumsListItem title={data.title} id={data.id} url={data.photos[0].url} />
            )}
        </>
    );
};

export default AlbumsDetails;
