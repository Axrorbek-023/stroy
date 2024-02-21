var elWrapper = document.querySelector('.corusel')
var elCorusel = document.querySelector('.corusel__list')
var elCoruselItems = document.querySelectorAll('.corusel__item')
var sz = elCorusel.offsetWidth
var len = elCoruselItems.length;
var count = 0
elCorusel.style.width = `${100*len}%`
elCorusel.style.hight = `100%`
for(var i = 0; i< elCoruselItems.length; i++){
    elCoruselItems[i].style.width = `${100 / len}%`
    elCoruselItems[i].style.hight = '100%'
}
function fnPrevius(){
    count -= 1
    if(count > 1){
        elCorusel.style.transform = `translateX(-${sz * count}px)`
    }else{
        elCorusel.style.transform = `translateX(-${sz * count}px)`
        count = 1
    }
}

function fnNext(){
    count += 1
    if(count < len){
        elCorusel.style.transform = `translateX(-${sz * count}px)`
    }else{
        count = len - 1
    }
}