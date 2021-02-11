
const secrchBtn = document.getElementById('search-btn');


// secrchBtn.addEventListener("click", async function(){
//     const searchSong = document.getElementById('search-fild').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchSong}`;
//     const res =await fetch(url);
//     const data =await res.json();
//     displaySongs(data.data);

    
// })
secrchBtn.addEventListener("click", function(){
    const searchSong = document.getElementById('search-fild').value;
    const url = `https://api.lyrics.ovh/suggest/${searchSong}`;
     fetch(url)
    .then(res=> res.json())
    .then(data => displaySongs(data.data))
    .catch( error => alert(error));

    
})

displaySongs = songs => {
    const displaySong = document.getElementById('display');
    displaySong.innerText= '';
    displaySong.innerText='';
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className=("single-result row align-items-center my-3 p-3");
        const artistName = song.artist;
        songDiv.innerHTML=`
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${artistName.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${artistName.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        <audio class="m-5 " controls="controls">
        <source src="${song.preview}" type="audio/ogg">
        Your browser does not support the HTML5 Audio element.
         </audio>
        `;
        displaySong.appendChild(songDiv);
        displaySong.style.display="block";
    });
}

const getLyric = async(artist,title) => {
    const url = (`https://api.lyrics.ovh/v1/${artist}/${title}`);
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics)
    }
    catch (error){
        console.log(error)
    }

}
const displayLyrics = lyrics =>{
    const lyricsDiv =document.getElementById('songLyrics');
    lyricsDiv.innerText='';
    lyricsDiv.innerText = lyrics;
}


    // const getLyric = (artist,title) => {
    //     const url = (`https://api.lyrics.ovh/v1/${artist}/${title}`);
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data =>  displayLyrics(data.lyrics))
    // }