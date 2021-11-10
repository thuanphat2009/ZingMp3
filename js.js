const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const song = $$('.opcity-song')
const listSong = $('.content-right-playlist')
const listMainMenu = $('.menu-main')
const newPlayList = $('.menu-playlist')
const music = $('#music')





song.forEach(function(value,index){
    value.onclick = function(){
        listSong.style.height = '452px'
        listMainMenu.style.height = '340px'
        listMainMenu.style.overflowY = 'auto';
        newPlayList.style.display = 'none';
        music.style.display = 'block';
    }
})

document.getElementsByClassName("progress1").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    console.log(this.min)
    this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
  };