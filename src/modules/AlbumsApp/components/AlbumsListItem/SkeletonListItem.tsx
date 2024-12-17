import Skeleton from '../Skeleton/Skeleton';
import styles from './AlbumsListItem.module.css';

const SkeletonListItem = () => (
    <div className={styles.container}>
        <Skeleton style={{ width: 96, height: 96 }} />
        <div className={styles.content}>
            <Skeleton style={{ width: 120, height: 21 }} />
            <Skeleton style={{ width: 256, height: 21 }} />
        </div>
    </div>
);

export default SkeletonListItem;
