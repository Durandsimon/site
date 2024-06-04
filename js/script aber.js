
document.querySelector("#affiche1").addEventListener("click", agrandir);
document.querySelector("#affiche2").addEventListener("click", agrandir);
document.querySelector("#affiche3").addEventListener("click", agrandir);
document.querySelector("#affiche4").addEventListener("click", agrandir);
document.querySelector("#affiche5").addEventListener("click", agrandir);
document.querySelector("#affiche6").addEventListener("click", agrandir);
document.querySelector("#affiche7").addEventListener("click", agrandir);
document.querySelector("#affiche8").addEventListener("click", agrandir);
document.querySelector("#affiche9").addEventListener("click", agrandir);
document.querySelector("#affiche10").addEventListener("click", agrandir);
document.querySelector("#affiche11").addEventListener("click", agrandir);
document.querySelector("#affiche12").addEventListener("click", agrandir);
document.querySelector("#affiche13").addEventListener("click", agrandir);
document.querySelector("#affiche14").addEventListener("click", agrandir);
document.querySelector("#affiche15").addEventListener("click", agrandir);
document.querySelector("#affiche16").addEventListener("click", agrandir);
document.querySelector("#affiche17").addEventListener("click", agrandir);
document.querySelector("#affiche18").addEventListener("click", agrandir);
document.querySelector("#affiche19").addEventListener("click", agrandir);
document.querySelector("#affiche20").addEventListener("click", agrandir);



let click_text_video = 0;

let num = 0;


function agrandir(){

    if(num != this.id.substr(7, this.id.length-7)){
        click_text_video = 0;
    }

    num = this.id.substr(7, this.id.length-7);
    if (click_text_video == 0) {
        document.querySelector("#affiche"+num).style.position = 'fixed'
        document.querySelector("#affiche"+num).style.top = '0'
        document.querySelector("#affiche"+num).style.left = '0'
        document.querySelector("#affiche"+num).style.backgroundColor = 'rgb(0 0 0 / 70%)'
        document.querySelector("#affiche"+num).style.width = '-webkit-fill-available'
        document.querySelector("#affiche"+num).style.height = '100%'
        document.querySelector("#affiche"+num).style.zIndex = '2'
        
        click_text_video = 1;
    }
    else {
        document.querySelector("#affiche"+num).style.position = 'static'
        document.querySelector("#affiche"+num).style.zIndex = '1'
        document.querySelector("#affiche"+num).style.width = '100%'
        document.querySelector("#affiche"+num).style.backgroundColor = 'rgb(0 0 0 / 0%)'
        click_text_video = 0;
    }
}

