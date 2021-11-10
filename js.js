const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const listSong = $('.content-right-playlist')
const listMainMenu = $('.menu-main')
const newPlayList = $('.menu-playlist')
const music = $('#music')

const app = {
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
            path: './music/Nham-Mat-Thay-Mua-He-Nham-Mat-Thay-Mua-He-OST-Nguyen-Ha.mp3',
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
        const htmls = this.song.map(song => {
            return `<li class="content-right-song">
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
        $('.content-right-playlist').innerHTML = htmls.join('');
    },
    clickSong: function(){

        $$('.opcity-song').forEach(function(value,index){
            value.onclick = function(){
                listSong.style.height = '422px'
                listMainMenu.style.height = '340px'
                listMainMenu.style.overflowY = 'auto';
                newPlayList.style.display = 'none';
                music.style.display = 'block';
                
            }
        })
    },

    start: function(){
         this.render();
         this.clickSong();
    }
}

app.start();













