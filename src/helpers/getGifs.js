
    export const getGifs = async (pCategoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(pCategoria)}&limit=10&api_key=S7QXL6iLyqxHesWbzqsZNa9sMhzHmSZU`;
        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        })
        return(gifs);
    }