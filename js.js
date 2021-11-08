const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const song = $$('.opcity-song')
const listSong = $('.content-right-playlist')
const listMainMenu = $('.menu-main')
const newPlayList = $('.menu-playlist')
const music = $('#music')
console.log(music)

song.forEach(function(value,index){
    value.onclick = function(){
        listSong.style.height = '452px'
        listMainMenu.style.height = '340px'
        listMainMenu.style.overflowY = 'auto';
        newPlayList.style.display = 'none';
        music.style.display = 'flex';
    }
})