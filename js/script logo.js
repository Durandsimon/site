
document.querySelector("#logo1").addEventListener("click", agrandir);
document.querySelector("#logo2").addEventListener("click", agrandir);
document.querySelector("#logo3").addEventListener("click", agrandir);
document.querySelector("#logo4").addEventListener("click", agrandir);
document.querySelector("#logo5").addEventListener("click", agrandir);
document.querySelector("#logo6").addEventListener("click", agrandir);
document.querySelector("#logo7").addEventListener("click", agrandir);
document.querySelector("#logo8").addEventListener("click", agrandir);
document.querySelector("#logo9").addEventListener("click", agrandir);
document.querySelector("#logo10").addEventListener("click", agrandir);


let click_text_video = 0;

let num = 0;


function agrandir(){

    if(num != this.id.substr(4, this.id.length-4)){
        click_text_video = 0;
    }

    num = this.id.substr(4, this.id.length-4);
    if (click_text_video == 0) {
        document.querySelector("#logo"+num).style.position = 'fixed'
        document.querySelector("#logo"+num).style.top = '0'
        document.querySelector("#logo"+num).style.left = '0'
        document.querySelector("#logo"+num).style.backgroundColor = 'rgb(0 0 0 / 70%)'
        document.querySelector("#logo"+num).style.width = '-webkit-fill-available'
        document.querySelector("#logo"+num).style.height = '100%'
        document.querySelector("#logo"+num).style.zIndex = '2'
        
        click_text_video = 1;
    }
    else {
        document.querySelector("#logo"+num).style.position = 'static'
        document.querySelector("#logo"+num).style.zIndex = '1'
        document.querySelector("#logo"+num).style.width = '100%'
        document.querySelector("#logo"+num).style.backgroundColor = 'rgb(0 0 0 / 0%)'
        click_text_video = 0;
    }
}

