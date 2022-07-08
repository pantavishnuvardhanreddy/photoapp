import {useState} from 'react';

function AlbumList(){
    
    let [photos,setPhotos]=useState([]);
    if(!photos.length){
        getAlbums();
    }
    async function getAlbums(){
        const photos = await(await fetch("https://jsonplaceholder.typicode.com/photos")).json();
        console.log(photos);
        setPhotos(photos);
    }
    return (
        <div>.
            <table>
                <thead>
                    <tr> <td>Title</td>
                     <td>URL</td></tr>
                </thead>
                <tbody>
                    {
                        photos.map(function(photo){
                             // console.log(photo);
                            return <tr><td>{photo.title}</td>
                                <td>{photo.url}</td></tr>
                         })
               }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;