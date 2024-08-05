export const loadUsers = async () => {
    const usersResponse = fetch('http://localhost:3001/users');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [users, photos] = await Promise.all([usersResponse, photosResponse]);

    const usersJson = await users.json();
    const photosJson = await photos.json();

    const usersAndPhotos = usersJson.map((user, index) => {
        return { ...user, cover: photosJson[index].url }
    });

    return usersAndPhotos.sort((a, b) =>
        a.nome.toLowerCase() > b.nome.toLowerCase() ?
        1 : a.nome.toLowerCase() < b.nome.toLowerCase() ?
        -1 : 0);
}