const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const song = $$('.opcity-song')
const listSong = $('.content-right-playlist')
const listMainMenu = $('.menu-main')
const newPlayList = $('.menu-playlist')
console.log(listMainMenu)

song.forEach(function(value,index){
    value.onclick = function(){
        listSong.style.height = '440px'
        listMainMenu.style.height = '330px'
        listMainMenu.style.overflowY = 'auto';
        newPlayList.style.display = 'none';
    }
})