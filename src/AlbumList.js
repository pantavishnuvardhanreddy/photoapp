import {useState} from 'react';
import './AlbumList.css';
import Counter from "./Counter";
function AlbumList(){
    
    let [photos,setPhotos]=useState([]);
    if(!photos.length) {
       // getAlbums();
    }
    async function getAlbums() {
        const photos = await(await fetch("https://jsonplaceholder.typicode.com/photos?_page=1&albumId="+document.getElementById('searchtext').value)).json();
        console.log(photos);
        setPhotos(photos);
    }
    return (
        
        <div class="center">
            <Counter count={photos.length}></Counter>
            <input type="number" placeholder="Album ID" id='searchtext' class="center"></input>
            <button class="center" onClick={getAlbums}>search</button>
            <table class="center">
            
                <thead>
                   <tr> <td>Title</td>           
                     <td>URL</td></tr>
                     
                </thead>
                <tbody>
                    {
                        photos.map(function(photo) {
                            return <tr key={photo.id}><td>{photo.title}</td>
                                <td><a href={photo.url}>click here</a></td></tr>
                         })
               }</tbody>
            </table>
        </div>
    )
}

export default AlbumList;