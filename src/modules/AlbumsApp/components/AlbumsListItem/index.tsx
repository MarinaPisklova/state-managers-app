import { useQuery } from 'react-query';
import AlbumsListItem from './AlbumsListItem';
import SkeletonListItem from './SkeletonListItem';
import { getPhotos } from '../../Api';

const AlbumsListItemWrapper = ({ title, id }: { title: string; id: string }) => {
    const { data, isLoading } = useQuery(['albums-detail', id], getPhotos(id), {
        staleTime: 600000,
    });

    return (
        <>
            {!isLoading ? (
                <AlbumsListItem title={title} url={data.photos[0].url} id={id} />
            ) : (
                <SkeletonListItem />
            )}
        </>
    );
};

export default AlbumsListItemWrapper;
