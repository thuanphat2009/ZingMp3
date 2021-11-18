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
const btnPlayLeft = $('.fas.fa-play')
const imgMain = $('.playlist-img')
const boxImg = $('.box-img')
const opacityImg = $('.opacity')
const contentSong = $$('.content-right-song')
console.log(contentSong)
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
            time: '4:42'
        },
        {
            name: 'Xin Lỗi',
            singer: 'Nguyên Hà',
            path: './music/Xin-Loi-Nguyen-Ha.mp3',
            image: './img/xin-loi.jpg',
            time: '4:04'
        },
        {
            name: 'Hoàng Hoa',
            singer: 'Nguyên Hà',
            path: './music/Hoang-Hoa-Nguyen-Ha.mp3',
            image: './img/hoang-hoa.jpg',
            time: '3:18'
        },
        {
            name: 'Có Một Ngày Buồn Như Thế',
            singer: 'Nguyên Hà',
            path: './music/CoMotNgayBuonNhuThe-NguyenHa-6272636.mp3',
            image: './img/co-1-ngay-buon-nhu-the.jpg',
            time: '4:34'
        },
        {
            name: 'Một Góc Tim Hồng',
            singer: 'Nguyên Hà',
            path: './music/Mot-Goc-Tim-Hong-Nguyen-Ha.mp3',
            image: './img/1-goc-tim-hong.jpg',
            time: '3:43'
        },
        {
            name: 'Ta Có Hẹn Với Tháng 5',
            singer: 'Nguyên Hà',
            path: './music/Ta-Co-Hen-Voi-Thang-5-Nguyen-Ha.mp3',
            image: './img/ta-co-hen-voi-thang-5.jpg',
            time: '4:20'
        },
        {
            name: 'Tình Mình Là Mơ',
            singer: 'Nguyên Hà',
            path: './music/Tinh-Minh-La-Mo-Nguyen-Ha.mp3',
            image: './img/tinh-minh-la-mo.jpg',
            time: '3:20'
        },
        {
            name: 'Tôi Yêu Em',
            singer: 'Nguyên Hà',
            path: './music/Toi-Yeu-Em-Nguyen-Ha.mp3',
            image: './img/toi-yeu-em.jpg',
            time: '2:41'
        },
        {
            name: 'Cà phê, thuốc lá và những ngày vui',
            singer: 'Thế Bảo',
            path: './music/Cafe-Thuoc-La-Nhung-Ngay-Vui-The-Bao.mp3',
            image: './img/cf-thuocla.jpg',
            time: '5:25'
        },
        {
            name: 'XTC',
            singer: 'Tlinh, MCK',
            path: './music/XTCRemix-TlinhGroovieLaThangMCKRPT-7004626.mp3',
            image: './img/xtc.jpg',
            time: '4:03'
        },
        {
            name: 'Your Smile',
            singer: 'Obito, Hnhngan',
            path: './music/your-smile.mp3',
            image: './img/your-smile.jpg',
            time: '3:22'
        },
        {
            name: 'Điều Anh Luôn Giữ Kín Trong Tim',
            singer: 'Mck, Tlinh',
            path: './music/DiuAnhLuonGiuKinTrongTym-MCKtlinh2Pillz-7049553.mp3',
            image: './img/dieu-anh-luon-giu-kin.jpg',
            time: '2:51'
        },
        {
            name: 'Vài Giây Nữa Thôi',
            singer: 'Reddy',
            path: './music/Vai-Giay-Nua-Thoi-Reddy.mp3',
            image: './img/vai-giay-nua-thoi.jpg',
            time: '4:38'
        },
        {
            name: 'Phố Không Em',
            singer: 'Thái Đinh',
            path: './music/Pho-Khong-Em-Thai-Dinh.mp3',
            image: './img/pho-k-em.jpg',
            time: '4:46'
        },
        {
            name: 'Những Ngày Vắng Em',
            singer: 'Thái Đinh',
            path: './music/Nhung-Ngay-Vang-Em-Thai-Dinh.mp3',
            image: './img/nhung-ngay-vang-em.jpg',
            time: '4:10'
        },
        {
            name: 'Là Em',
            singer: 'Thái Đinh, Minh Cà Ri',
            path: './music/La-Em-Thai-Dinh-Minh-Ca-Ri.mp3',
            image: './img/la-em.jpg',
            time: '4:57'
        },
        {
            name: 'N-Sao',
            singer: 'Suboi',
            path: './music/Nsao-Suboi-5527082.mp3',
            image: './img/N-Sao.jpg',
            time: '3:36'
        },
        {
            name: 'Okeokeoke',
            singer: 'LowG',
            path: './music/Okeokeoke-LowG-6821131.mp3',
            image: './img/oke.jpg',
            time: '2:09'
        },
        {
            name: 'Night City',
            singer: 'Obito, Hnhngan',
            path: './music/NightCityDemo-ObitoHnhngan-6896893.mp3',
            image: './img/night-city.jpg',
            time: '3:19'
        },
        {
            name: 'Chân Tình',
            singer: 'Tlinh, Quang Trung',
            path: './music/Chan-Tinh-Quang-Trung-tlinh-DTAP.mp3',
            image: './img/chan-tinh.jpg',
            time: '3:28'
        },
        {
            name: 'Bước Qua Mùa Cô Đơn',
            singer: 'Thái Vũ',
            path: './music/BuocQuaMuaCoDon-Vu-6879419.mp3',
            image: './img/buoc-qua-mua-co-don.jpg',
            time: '4:38'
        },
        {
            name: 'An Thần',
            singer: 'LowG, Thắng',
            path: './music/AnThan-ThangLowG-7115212.mp3',
            image: './img/an-than.jpg',
            time: '3:35'
        },
        {
            name: '3 1 0 7',
            singer: 'W/n ft. ( Nâu,Duongg,Titie )',
            path: './music/3 1 0 7 - Duongg_ Nau.mp3',
            image: './img/3107.jpg',
            time: '3:52'
        },
        {
            name: '3 1 0 7 - 2',
            singer: 'Nâu, Duongg',
            path: './music/31072LofiVersion-DuonggNauWn-6944268.mp3',
            image: './img/3107-2.jpg',
            time: '3:31'
        },
        {
            name: '3 1 0 7 - 3',
            singer: 'W/n ft. ( Nâu,Duongg,Titie )',
            path: './music/3107-3 - W_n_ Nau_ Duongg_ Titie.mp3',
            image: './img/3107-3.jpg',
            time: '4:00'
        },
    ],
    
    render: function(){
            // var total = app.changeToTime(Math.floor(audio.duration))
            // var totalBehind = total === 'NaN:NaN:NaN' ? '00:00' : total
            // console.log(totalBehind)
        
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
            <span class="content-right-song-time">
                ${song.time}
             </span>
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
                playList.style.height = '492px'
                listMainMenu.style.height = '390px'
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
        $('.content-left-sub-link').onclick = function(){
            if(_this.isPlaying){
                
              audio.pause()
            }
            else{
                audio.play()
                
            }
            
        }
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
            btnPlayLeft.classList.remove('fa-play')
            btnPlayLeft.classList.add('fa-pause')
            playBtn.classList.remove('fa-play-circle')
            playBtn.classList.add('fa-pause-circle')
            imgMain.style.borderRadius = '50%'
            boxImg.style.transition  = 'all linear .5s'
            boxImg.style.borderRadius = '50%'
            // opacityImg.style.borderRadius = '50%'
            volume.value = 1
            cd.play()
        }
        audio.onpause = function(){
            _this.isPlaying = false
            btnPlayLeft.classList.remove('fa-pause')
            btnPlayLeft.classList.add('fa-play')
            playBtn.classList.remove('fa-pause-circle')
            playBtn.classList.add('fa-play-circle')
            imgMain.style.borderRadius = '5px'
            imgMain.style.transition  = 'all linear .5s'
            boxImg.style.borderRadius = '5px'
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
        this.render();
        // Render bài hát
        
         this.clickSong();
        //  Lắng nghe / xử lí các sự kiện
         this.handleEvent();
         
         
    }
}

app.start();














