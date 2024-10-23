import { PlayList } from "./playlist.js";
const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const artist = document.getElementById('artist')
const name_song = document.getElementById('song_name')
const img_song = document.getElementById('img_song')


let indiceActual=0

function loadSong(index) {
    const song = PlayList[index];
    audio.src = song.song;
    img_song.src = song.img;
    artist.textContent = song.artist;
    name_song.textContent = song.title;
}

loadSong(indiceActual);


play.addEventListener('click', () => audio.play())

pause.addEventListener('click', () => audio.pause())

rewind.addEventListener('click', () => audio.currentTime -= 10)

forward.addEventListener('click', () => audio.currentTime += 10)

stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})

next.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % PlayList.length; 
    loadSong(indiceActual); 
    audio.play();
});

previous.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + PlayList.length) % PlayList.length; 
    loadSong(indiceActual);
    audio.play();
});

audio.addEventListener('ended', () => {
    next.click(); 
});

