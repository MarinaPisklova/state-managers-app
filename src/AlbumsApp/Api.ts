export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPhotos = (id: string) => async () => {
    const details = await fetch(BASE_URL + '/albums/' + id).then((res) => res.json());
    const photos = await fetch(BASE_URL + '/albums/' + id + '/photos').then((res) => res.json());

    return { ...details, photos };
};

export const getAlbums =
    () =>
    async ({ pageParam = 0 }) => {
        return await fetch(BASE_URL + '/albums?_limit=10&_start=' + pageParam * 10)
            .then((res) => res.json())
            .then((res) => ({ data: res, page: pageParam }));
    };
