/**
 * Created by Administrator on 2016/8/30.
 */
FastClick.attach(document.body);
//REM
~function () {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();

//初始化swiper
var swiper1 = new Swiper('.swiper-container',{
    loop:true,
    direction: 'vertical',
    effect:'slide',
    //initialSlide:0,
    //图片延迟加载
    /*lazyLoading: true,
    lazyLoadingInPrevNext: true,*/
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;

        //->计算ID是PAGE?
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }


        //->给当前的活动快设置ID即可,还要把其余的移除
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });
    }
});

//->MUSIC
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();