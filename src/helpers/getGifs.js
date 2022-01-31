export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=HJqRpGoRx1JZX9HvttY4sA5QkUGDGimz&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(({id,title,images}) => {
        return {
            id:id,
            title:title,
            url:images?.downsized_medium.url,
        }
    })

    return gifs; 

};