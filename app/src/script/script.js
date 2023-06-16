const navList = document.querySelector('.nav-content');
const navBtn = document.querySelector('.nav__btn');

navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('active')
    navList.classList.toggle('active')
})

// slider

const sliderbtns = document.querySelectorAll('[data-target]');
const sliderItems = document.querySelectorAll('.slider__item');
const slider = document.querySelector('.slider');
let activeSlide = 0
for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('active')) {
        activeSlide = i
    }
    
}
sliderbtns.forEach((btn)=>{
    btn.addEventListener('click', function (e) {
        sliderMove(e.target.getAttribute('data-target'))
    })
})

function sliderMove(dir) {
    if (dir === 'next') {
        if (activeSlide < sliderItems.length -1) {
            activeSlide++
        } else {
            activeSlide = 0
        }
    }else{
        if (activeSlide > 0) {
            activeSlide--
        } else {
            activeSlide = sliderItems.length -1
        }
    }
    sliderItems.forEach((item)=>{
        item.classList.remove('active')
    })
    sliderItems[activeSlide].classList.add('active')
}

setInterval(() => {
    sliderMove('next')
}, 5000);

// application js

const applyStep = document.querySelectorAll('.apply__step');
const applyForm = document.querySelectorAll('.apply__block');
const applyBtn = document.querySelectorAll('.apply__btn, .apply__btn-back');
for (let i = 0; i < applyBtn.length; i++) {
    applyBtn[i].addEventListener('click', function (e) {
        e.preventDefault()
        if (i == 0) {
            applyStep[1].classList.add('active')
            applyForm[0].classList.remove('active')
            applyForm[1].classList.add('active')
        }
        if (i == 1) {
            applyStep[1].classList.remove('active')
            applyForm[0].classList.add('active')
            applyForm[1].classList.remove('active')
        }
        if (i == 2) {
            applyStep[2].classList.add('active')
            applyForm[1].classList.remove('active')
            applyForm[2].classList.add('active')
        }
    })
    
}

// option video

const video = document.querySelector('.option__video');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const duration = document.querySelector('.option__duration');
const line = document.querySelector('.option__line');
const restart = document.querySelector('.option__restart');
const prevSpeed = document.querySelector('.option__prev-speed');
const prev = document.querySelector('.option__prev');
const nextSpeed = document.querySelector('.option__next-speed');
const next = document.querySelector('.option__next');
const playPause = document.querySelector('.option__play');
const volumeIcon = document.querySelector('.option__volume-icon');
const range = document.querySelector('.option__range');
const screen = document.querySelector('.option__screen');
const speedText = document.querySelector('.option__speed-watch');

playPause.addEventListener('click',()=> videoPlay(playPause))
video.addEventListener('dblclick', ()=> videoPlay(playPause))
function videoPlay(playPause) {
    playPause.classList.toggle('active')
    if (video.paused === true) {
        video.play()
        videoEnd()
        videoStart()
    } else {
        video.pause()
    }
}
function changeTime(time) {
    const noll = (num)=> num < 10 ? '0'+num : num
    let hour = Math.trunc(time / 3600)
    time -= hour * 3600
    let min = Math.trunc(time / 60)
    time -= min * 60
    time = Math.trunc(time)
    return `${noll(hour)}:${noll(min)}:${noll(time)}`
}

function videoStart() {
    setInterval(() => {
        return start.innerHTML = changeTime(video.currentTime)
    }, 1000);
}

function videoEnd() {
    return end.innerHTML = changeTime(video.duration)
}

duration.addEventListener('click', function (e) {
    const videoTime = (e.offsetX / duration.clientWidth) * video.duration
    video.currentTime = videoTime
})
video.addEventListener('timeupdate', function () {
    const lineWidth = (video.currentTime / video.duration)
    line.style.width = lineWidth * 100 + '%'
})
restart.addEventListener('click', ()=> video.currentTime = 0)
prevSpeed.addEventListener('click',()=> videoDownSpeed())
nextSpeed.addEventListener('click',()=> videoUpSpeed())
prev.addEventListener('click',()=> alert('no video'))
next.addEventListener('click',()=> alert('no video'))

function videoDownSpeed() {
    if (video.playbackRate > 0) {
        video.playbackRate += -0.25
        speedText.style = "display:flex;"
        speedText.innerHTML = video.playbackRate + 'x'
        setTimeout(() => {
            speedText.style = "display:none;"
        }, 1500);
    }
}
function videoUpSpeed() {
    if (video.playbackRate < 2) {
        video.playbackRate += 0.25
        speedText.style = "display:flex;"
        speedText.innerHTML = video.playbackRate + 'x'
        setTimeout(() => {
            speedText.style = "display:none;"
        }, 1500);
    }
}
const volumeClass = ['mute','down','normal','up']
volumeIcon.addEventListener('click', ()=> video.muted === true ? video.muted = false : video.muted = true)

video.onvolumechange = ()=>{
    for (let i = 0; i < volumeClass.length; i++) {
        volumeIcon.classList.remove(volumeClass[i])
    }
    let volume = video.volume * 100
    if (video.muted) {
        volumeIcon.classList.add('mute')
    }else if (volume > 75) {
        volumeIcon.classList.add('up')
    }else if (volume > 40) {
        volumeIcon.classList.add('normal')
    }else if (volume > 15) {
        volumeIcon.classList.add('down')
    }else if (volume >= 0) {
        volumeIcon.classList.add('mute')
    }
}

range.addEventListener('click', function (e) {
    video.volume = e.currentTarget.value / 100
})

screen.addEventListener('click',function () {
    video.requestFullscreen()
})

// service slider

const serviceSlider = document.querySelector('.service__block');
const serviceBox = document.querySelector('.service__box');
const serviceLeft = document.querySelector('.service__left');
const serviceRight = document.querySelector('.service__right');
serviceLeft.addEventListener('click', function () {
    serviceSlider.scrollLeft -= 150
})
serviceRight.addEventListener('click', function () {
    serviceSlider.scrollLeft += 150
})

const maxScroll = (serviceSlider.scrollWidth - serviceSlider.clientWidth)
function servicePlay() {
    if (serviceSlider.scrollLeft > (maxScroll -1)) {
        serviceSlider.scrollLeft = serviceSlider.scrollLeft - maxScroll
    }else{
        serviceSlider.scrollLeft = serviceSlider.scrollLeft + 1
    }
}
setInterval(() => {
    servicePlay()
}, 60);



// accardion

const accardionBox = document.querySelectorAll('.accardion__box');

accardionBox.forEach((box) => {
    box.addEventListener('click', function () {
        for (let i = 0; i < accardionBox.length; i++) {
            accardionBox[i].classList.remove('active') 
        }
        this.classList.add('active')
    })
});
