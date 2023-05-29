const getGifs = async (category) => {
    const apiKey = "AmJF7zza07J2HjX7LFgWH2UrZ0BtErpe";
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const response = await fetch(urlApi)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}


export default getGifs