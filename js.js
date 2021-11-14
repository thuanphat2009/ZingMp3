const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const listMainMenu = $('.menu-main')
const newPlayList = $('.menu-playlist')
const music = $('#music')
const playList = $('.content-right-playlist')

const playBtn = $('.far.fa-play-circle')
const progress = $('.progress1')
const audio = $('#audio')
const heading = $('.music-name')
const cdThump = $('.img-music')
const singer = $('.music-singer')
const btnNext = $('.fas.fa-step-forward')
const btnPrev = $('.fas.fa-step-backward')
const btnRandom = $('.far.fa-random')
const btnRepeat = $('.fal.fa-repeat')
const option = $$('.content-right-song-option-list')
const timeAudio = $('.music-center-time-total')
const timeCurrent = $('.music-center-time-now')
const volume = $('.progress2')
const btnVolume = $('.fa-volume-up')
console.log(btnVolume)
const app = {
    currentIndex: '',
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    song: [
        {
            name: 'Nhắm Mắt Thấy Mùa Hè',
            singer: 'Nguyên Hà',
            path: './music/Nham-Mat-Thay-Mua-He-Nham-Mat-Thay-Mua-He-OST-Nguyen-Ha.mp3',
            image: './img/nham-mat-thay-mua-he.jpg',
        },
        {
            name: 'Xin Lỗi',
            singer: 'Nguyên Hà',
            path: './music/Xin-Loi-Nguyen-Ha.mp3',
            image: './img/xin-loi.jpg',
        },
        {
            name: 'Hoàng Hoa',
            singer: 'Nguyên Hà',
            path: './music/Hoang-Hoa-Nguyen-Ha.mp3',
            image: './img/hoang-hoa.jpg',
        },
        {
            name: 'Có Một Ngày Buồn Như Thế',
            singer: 'Nguyên Hà',
            path: '../music/CoMotNgayBuonNhuThe-NguyenHa-6272636.mp3',
            image: './img/co-1-ngay-buon-nhu-the.jpg',
        },
        {
            name: 'Một Góc Tim Hồng',
            singer: 'Nguyên Hà',
            path: './music/Mot-Goc-Tim-Hong-Nguyen-Ha.mp3',
            image: './img/1-goc-tim-hong.jpg',
        },
        {
            name: 'Ta Có Hẹn Với Tháng 5',
            singer: 'Nguyên Hà',
            path: './music/Ta-Co-Hen-Voi-Thang-5-Nguyen-Ha.mp3',
            image: './img/ta-co-hen-voi-thang-5.jpg',
        },
        {
            name: 'Tình Mình Là Mơ',
            singer: 'Nguyên Hà',
            path: './music/Tinh-Minh-La-Mo-Nguyen-Ha.mp3',
            image: './img/tinh-minh-la-mo.jpg',
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
        },
    ],
    
    render: function(){
        const htmls = this.song.map((song,index) => {
            return `<li class="content-right-song ${index === this.currentIndex ? 'active':''}" data-index = "${index}")>
            <div class="content-right-song-box">
                <i class="content-right-song-box-icon fal fa-music"></i>
                <div class="content-right-song-box-main">
                    <div class="box-song-opacity">
                        <img src="${song.image}" alt="" class="content-right-song-box-img">
                        <div class="opcity-song">
                            <i class="opcity-song-icon fas fa-play"></i>
                        </div>
                    </div>
                    
                    <div class="content-right-song-box-more">
                        <h5 class="content-right-song-box-name">
                            ${song.name}
                        </h5>
                        <h6 class="content-right-song-box-singer">
                            ${song.singer}
                        </h6>
                    </div>
                    
                </div>
            </div>
            
            <ul class="content-right-song-option-list">
                <li class="content-right-song-option-item">
                    <i class="content-right-song-option-icon fal fa-microphone-stand"></i>
                </li>
                <li class="content-right-song-option-item">
                    <i class="content-right-song-option-icon fal fa-heart"></i>
                </li>
                <li class="content-right-song-option-item">
                    <i class="content-right-song-option-icon far fa-ellipsis-h"></i>
                </li>
            </ul>
        </li>`
        })
        playList.innerHTML = htmls.join('');
    },
    clickSong: function(){
        
        
        $$('.content-right-song').forEach(function(value,index){
            value.onclick = function(){
                playList.style.height = '422px'
                listMainMenu.style.height = '340px'
                listMainMenu.style.overflowY = 'auto';
                newPlayList.style.display = 'none';
                music.style.display = 'block'; 
                app.currentIndex = index
            }
        })
    
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.song[this.currentIndex]
            }
        })
    },
    handleEvent: function(){
        const _this = this
        // Xử lí khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                
              audio.pause()
            }
            else{
                audio.play()
                
            }
            
        }
        audio.onplay = function(){
            _this.isPlaying = true
            playBtn.classList.remove('fa-play-circle')
            playBtn.classList.add('fa-pause-circle')
            volume.value = 1
            cd.play()
        }
        audio.onpause = function(){
            _this.isPlaying = false
            playBtn.classList.remove('fa-pause-circle')
            playBtn.classList.add('fa-play-circle')
            // console.log(this.duration)
            cd.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
             if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
                var total = app.changeToTime(Math.floor(audio.duration))
                var totalBehind = total === 'NaN:NaN:NaN' ? '00:00' : total
                timeAudio.textContent = totalBehind
                timeCurrent.textContent = app.changeToTime(Math.floor(audio.currentTime))
             }
        }
        // Khi volume thay đổi
        volume.ontimeupdate = function(){
            console.log('dqwd')
        }
        // Tua Song
        progress.onchange = function(e){
            const seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
        }
        // Next Song
        btnNext.onclick = function(){
            if(_this.isRandom){
                _this.random()
            }
            else{
                _this.nextSong()
            }
           audio.play()
           _this.render()
           _this.scrollToActiveSong()
        }
        // Prev Song
        btnPrev.onclick = function(){
            if(_this.isRandom){
                _this.random()
            }
            else{
                _this.prev()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        // Bật tắt Random
        btnRandom.onclick = function(){
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active',_this.isRandom)
        }
        // Xử lí next song khi End Song
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }
            else{
                btnNext.click()
            }
        }
         // Bật tắt Repeat
        btnRepeat.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active',_this.isRepeat)
        }
        // Lắng nghe hành vi click vào playlist
        playList.onclick = function(e){
            const songNode = e.target.closest('.content-right-song')
            if(songNode || e.target.closest('.content-right-song-option-list')) 
            {
                // Khi click vao Song
                if(songNode){
                    _this.currentIndex =  Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        }
        var volumeRage = 1;
        //Xử lý tăng giảm âm lượng
        volume.oninput = function () {
            volumeRage = volume.value;
            audio.volume = volume.value;

            if (audio.volume == 0)
            {
                _this.isMute = true
                btnVolume.classList.remove('fa-volume-up',!_this.isMute)
                btnVolume.classList.add('fa-volume-mute',_this.isMute)
            }
               
            else 
                _this.isMute = false
                btnVolume.classList.remove('fa-volume-mute',_this.isMute)
                btnVolume.classList.add('fa-volume-up',!_this.isMute)
        }

        //Xử lý tắt/mở âm thanh
        btnVolume.onclick = function () {
            _this.isMute = !_this.isMute
           
            if (_this.isMute) {
                btnVolume.classList.remove('fa-volume-up',_this.isMute)
                btnVolume.classList.add('fa-volume-mute',!_this.isMute )
                volume.value = 0;
                audio.volume = volume.value;
            } else {
                btnVolume.classList.remove('fa-volume-mute',_this.isMute)
                btnVolume.classList.add('fa-volume-up',!_this.isMute )
                volume.value = volumeRage;
                audio.volume = volume.value;
            }
        }

        // Xử lí xoay dĩa
        const cd = cdThump.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cd.pause()
    },
    loadCurrentSong: function(){
      
        heading.textContent = this.currentSong.name
        audio.src = this.currentSong.path
        cdThump.src = this.currentSong.image
        singer.textContent = this.currentSong.singer
        
    },
    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.song.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prev: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.song.length - 1
        }
        this.loadCurrentSong()
    },
    random: function(){
        let newIndex 
        do {
            newIndex = Math.floor(Math.random()* this.song.length)
        } while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    scrollToActiveSong: function(){
        setTimeout(function(){
            $('.content-right-song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        },300)
        
    },
    changeToTime(secs) {
        var sec_num = parseInt(secs, 10)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    },
    start: function(){
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();
        // Render bài hát
         this.render();
         this.clickSong();
        //  Lắng nghe / xử lí các sự kiện
         this.handleEvent();
         
         
    }
}

app.start();













