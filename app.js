
const secrchBtn = document.getElementById('search-btn');

secrchBtn.addEventListener("click",function(){
    const searchSong = document.getElementById('search-fild').value;
    const url = `https://api.lyrics.ovh/suggest/${searchSong}`;
    fetch(url)
    .then( res => res.json())
    .then(data => displaySongs(data.data))

    .catch(err => alert("Sorry this song is not available!"))
})

displaySongs = songs => {
    const displaySong = document.getElementById('display');
    
    songs.forEach(song => {
        console.log(song);
        const songDiv = document.createElement('div');
        songDiv.className=("single-result row align-items-center my-3 p-3");
        const artistName = song.artist;
        const albumTitle = song.album;
        songDiv.innerHTML=`
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${artistName.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        <audio class="m-5 " controls="controls">
        <source src="${song.preview}" type="audio/ogg">
        Your browser does not support the HTML5 Audio element.
         </audio>
        `;
        displaySong.appendChild(songDiv)
    });
}

// displaySongs = songs => {
//     const dispalySong = document.getElementById('display');
    
//     for (let i = 0; i < songs.length; i++) {
//         const element = songs[i];
//         const pictures = element.album;
//         // console.log(pictures);
//         // const display = element.link;
//         const div = document.createElement("div");
//         div.className="col-md-4";
//         const coloum1 = `
//         <img src="${pictures.cover_medium}">
//         <h2>${element.title}</h2>
//      `
//      div.innerHTML=coloum1;
//      dispalySong.appendChild(div);

//     }
// }