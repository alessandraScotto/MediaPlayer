let tracks = [
    { 'url': './audio/song-1.mp3', 'cover': './cover/cover-1.jpg', 'artist': 'Ghostrifter', 'title': 'Midnight Stroll' },
    { 'url': './audio/song-2.mp3', 'cover': './cover/cover-2.jpg', 'artist': 'Ghostrifter', 'title': 'Hot Coffee' },
    { 'url': './audio/song-3.mp3', 'cover': './cover/cover-3.jpg', 'artist': 'Ghostrifter', 'title': 'Merry Bay' },
    { 'url': './audio/song-4.mp3', 'cover': './cover/cover-4.jpg', 'artist': 'Ghostrifter', 'title': 'Morning Routine' },
    { 'url': './audio/song-5.mp3', 'cover': './cover/cover-5.jpg', 'artist': 'Ghostrifter', 'title': 'Still Awake' },
    { 'url': './audio/song-6.mp3', 'cover': './cover/cover-6.jpg', 'artist': 'Ghostrifter', 'title': 'Afternoon Nap' },
    { 'url': './audio/song-7.mp3', 'cover': './cover/cover-7.jpg', 'artist': 'Ghostrifter', 'title': 'Demised To Shield' },
    { 'url': './audio/song-8.mp3', 'cover': './cover/cover-8.jpg', 'artist': 'Ghostrifter', 'title': 'Departue' },
    { 'url': './audio/song-9.mp3', 'cover': './cover/cover-9.jpg', 'artist': 'Ghostrifter', 'title': 'Mellow Out' },
    { 'url': './audio/song-10.mp3', 'cover': './cover/cover-10.jpg', 'artist': 'Ghostrifter', 'title': 'Simplicit Nights' }
];

let wrapper = document.querySelector('#wrapper');
let i = 0;
//Sezione audio e cover
function createCover() {
    wrapper.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-4');
    div.innerHTML = ` 
        <img class="coverImg" src="${tracks[i].cover}" alt="Img cover">
        <audio preload="metadata">
          <source src="${tracks[i].url}" type="audio/mpeg">
        </audio>`
    wrapper.appendChild(div);

    audio = document.querySelector('audio');
}
//Sezione info track
function createInfoTrack() {

    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-8');
    div.innerHTML = `<div
  class="d-flex justify-content-center align-items-center flex-column mb-5 text-white fw-lighter">
  <h3 class="mb-4 fontMain">${tracks[i].title}</h3>
  <h3 class="fontMain">${tracks[i].artist}</h3>
   </div>
   <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <!-- Tempo Inizio e Fine -->
  <div class="d-flex justify-content-between">
  <p id="start" class="text-white fw-semibold">0:00</p>
  <p id="end" class="text-white fw-semibold">00.00</p>
  </div>

  <!-- Sezione Pulsanti AUDIO -->
  <div class="d-flex justify-content-between">
  <button id="btnBackward" class="btn btn-outline-light fs-3"><i
          class="fa-solid fa-backward"></i></button>
  <button id="btnPlay" class="btn btn-outline-light fs-3"><i
          class="fa-solid fa-play"></i></button>
  <button id="btnForward" class="btn btn-outline-light fs-3"><i
          class="fa-solid fa-forward"></i></button>
  </div>
  `
    wrapper.appendChild(div);


    //Button Play, Next, Prev, Pause.
    //Catturare pulsanti audio
    let btnBackward = document.querySelector('#btnBackward');
    let btnPlay = document.querySelector('#btnPlay');
    let btnForward = document.querySelector('#btnForward');

    //Funzione play and pause
    btnPlay.addEventListener('click', () => {

        if (audio.paused == true) {
            audio.play();
            btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audio.pause();
            btnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    })

    //Funzione Next song
    btnForward.addEventListener('click', () => {
       if (i < tracks.length - 1) {
        i++
        createCover();
        createInfoTrack();        
       } else {
        i = 0;
       }
    });

    //Funzione Backward song
    btnBackward.addEventListener('click', () => {
      if (i > 0) {
        i--;
       createCover();
       createInfoTrack();  
      } else {
        i = tracks.length - 1;
      }
    })




}






createCover();  //Invochiamo la funzione per la creazione del div Cover e Audio
createInfoTrack(); //Invochiamo la funzione per la creazione delle info sulla traccia audio e progress-bar

