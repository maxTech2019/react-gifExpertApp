 /* En la categoria Helpers estaran funciones que hacen un trabajo en especifico,
    pueden recibir argumentos lo procesas y hacen un return, que no hace falta que 
    redibujen el state del componente.
    La función getGifs realiza la petición HTTP al API, trae las imagenes y las 
    procesa. Esta función como es de tipo async no regresa directamente los gis, lo que
    retorna es una promesa que resuelve la colección de las imagenes.
    */

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