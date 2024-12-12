import styles from './AlbumsListItem.module.css';

const AlbumsListItem = ({ title, id, url }: any) => (
    <div className={styles['item-container']}>
        <div>
            <img src={url} alt="" width="96" height="96" />
        </div>
        <div className={styles['item-content']}>
            <div>
                #{id} <strong>{title}</strong>
            </div>
        </div>
    </div>
);

export default AlbumsListItem;
