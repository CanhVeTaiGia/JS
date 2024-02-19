const music = new Audio('./src/assets/audio/1.mp3');
let songs = JSON.parse(localStorage.getItem('songs'));
let artists = JSON.parse(localStorage.getItem('artists'));

Array.from(document.getElementsByClassName('song-item')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

Array.from(document.getElementsByClassName('items')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = artists[i].src
    e.getElementsByTagName('img')[0].title = artists[i].name
    e.getElementsByTagName('img')[0].alt = artists[i].name
})

let masterPlay = document.getElementById('master-play');
let wave = document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click',() =>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else{
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.remove('active2');
    }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlist-play')).forEach((element) =>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('song-item')).forEach((element) =>{
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let posterMasterPlay = document.getElementById('poster-master-play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlist-play')).forEach((element) =>{
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `./src/assets/audio/${index}.mp3`;
        posterMasterPlay.src = `./src/assets/img/${index}.jpg`
        music.play();
        let songTitle = songs.filter((ele) => {
            return ele.id == index;
        })
        songTitle.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () =>{
            masterPlay.classList.remove('bi-pause-fill');
            masterPlay.classList.add('bi-play-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

let currentStart = document.getElementById("current-start");
let currentEnd = document.getElementById("current-end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener('timeupdate', () => {
    let musicCurr = music.currentTime;
    let musicDur = music.duration;

    let min = Math.floor(musicDur/60);
    let sec = Math.floor(musicDur%60);
    if (sec < 10) {
        sec = `0${sec}`;
    } else {
        
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(musicCurr/60);
    let sec1 = Math.floor(musicCurr%60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    } else {
        
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressBar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
})

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');
    wave.classList.remove('active2');
})

let volIcon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let volDot = document.getElementById('vol-dot');
let volBar = document.getElementsByClassName('vol-bar')[0];

vol.addEventListener('change', () =>{
    if(vol.value == 0){
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 50){
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-up-fill');
    }

    let aVol = vol.value;
    volBar.style.width = `${aVol}%`;
    volDot.style.left = `${aVol}%`;
    music.volume = aVol / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song-item')).length;
    }
    music.src = `./src/assets/audio/${index}.mp3`;
    posterMasterPlay.src = `./src/assets/img/${index}.jpg`
    music.play();
    let songTitle = songs.filter((ele) => {
        return ele.id == index;
    })
    songTitle.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
})

next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('song-item')).length) {
        index = 1;
    }
    music.src = `./src/assets/audio/${index}.mp3`;
    posterMasterPlay.src = `./src/assets/img/${index}.jpg`
    music.play();
    let songTitle = songs.filter((ele) => {
        return ele.id == index;
    })
    songTitle.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('song-item'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
})

let leftScroll = document.getElementById('left-scroll');
let rightScroll = document.getElementById('right-scroll');
let popSong = document.getElementsByClassName('pop-song')[0];

leftScroll.addEventListener('click', () =>{
    popSong.scrollLeft -= 330;
})

rightScroll.addEventListener('click', () =>{
    popSong.scrollLeft += 330;
})

let leftScrolls = document.getElementById('left-scrolls');
let rightScrolls = document.getElementById('right-scrolls');
let items = document.getElementsByClassName('items')[0];

leftScrolls.addEventListener('click', () =>{
    items.scrollLeft -= 330;
})

rightScrolls.addEventListener('click', () =>{
    items.scrollLeft += 330;
})