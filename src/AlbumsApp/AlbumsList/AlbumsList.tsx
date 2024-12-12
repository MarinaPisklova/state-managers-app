import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAlbums } from '../Api';
import { observer } from 'mobx-react-lite';
import styles from './AlbumsList.module.css';
import { useStore } from '../stores';
import { useEffect } from 'react';
import AlbumsListItem from '../AlbumsListItem';

const AlbumsList = ({ filter }: { filter: (e: any) => boolean }) => {
    const { app } = useStore();

    const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
        'albums-list',
        getAlbums(),
        {
            staleTime: 600000,
            getNextPageParam: (lastPage) => {
                if (lastPage.data.next !== null) {
                    return lastPage.page + 1;
                }
            },
        },
    );

    useEffect(() => {
        window.scrollTo(0, app.scrollPositionY);
    }, [app]);

    const handleAlbumClick = () => {
        app.handleScrollPositionChange(window.scrollY);
    };

    return (
        <>
            {!isLoading &&
                data?.pages.map((page) =>
                    page.data.filter(filter).map((e: any) => (
                        <Link
                            to={`/details/${e.id}`}
                            key={e.id}
                            className={styles['albums-link']}
                            onClick={handleAlbumClick}
                        >
                            <AlbumsListItem {...e} />
                        </Link>
                    )),
                )}

            {hasNextPage && (
                <button className={styles['load-more-btn']} onClick={() => fetchNextPage()}>
                    Load More
                </button>
            )}
        </>
    );
};

export default observer(AlbumsList);
