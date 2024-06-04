

document.querySelector("#zone1").addEventListener("click", depliant);
document.querySelector("#zone2").addEventListener("click", depliant);
document.querySelector("#zone3").addEventListener("click", depliant);
document.querySelector("#zone4").addEventListener("click", depliant);
document.querySelector("#zone5").addEventListener("click", depliant);
document.querySelector("#zone6").addEventListener("click", depliant);
document.querySelector("#zone7").addEventListener("click", depliant);
document.querySelector("#zone8").addEventListener("click", depliant);
document.querySelector("#zone9").addEventListener("click", depliant);
document.querySelector("#zone10").addEventListener("click", depliant);

let click_text_video = 0;

let num = 0;


function depliant(){
    if(num != this.id.substr(4, this.id.length-4)){
        click_text_video = 0;
    }

    num = this.id.substr(4, this.id.length-4);
    if (click_text_video == 0) {
        document.querySelector("#text-video-"+num).style.display = 'block'
        document.querySelector("#fleche"+num).style.transform = 'rotate(180deg)'
        document.querySelector("#zone"+num).style.padding = '5% 5% 3% 5% '
        
        click_text_video = 1;
    }
    else {
        document.querySelector("#text-video-"+num).style.display = 'none'
        document.querySelector("#fleche"+num).style.transform = 'rotate(0deg)'
        document.querySelector("#zone"+num).style.padding = '5% 5% 5% 5% '
        click_text_video = 0;
    }
    
}



document.querySelector("#video1").addEventListener("click", agrandir);
document.querySelector("#video2").addEventListener("click", agrandir);
document.querySelector("#video3").addEventListener("click", agrandir);
document.querySelector("#video4").addEventListener("click", agrandir);
document.querySelector("#video5").addEventListener("click", agrandir);
document.querySelector("#video6").addEventListener("click", agrandir);
document.querySelector("#video7").addEventListener("click", agrandir);
document.querySelector("#video7a").addEventListener("click", agrandir);
document.querySelector("#video7b").addEventListener("click", agrandir);
document.querySelector("#video8").addEventListener("click", agrandir);
document.querySelector("#video8a").addEventListener("click", agrandir);
document.querySelector("#video8b").addEventListener("click", agrandir);
document.querySelector("#video9").addEventListener("click", agrandir);
document.querySelector("#video10").addEventListener("click", agrandir);
document.querySelector("#video10").addEventListener("click", agrandir);
document.querySelector("#video10a").addEventListener("click", agrandir);
document.querySelector("#video10b").addEventListener("click", agrandir);
document.querySelector("#video10c").addEventListener("click", agrandir);





let click_text_video2 = 0;

let num2 = 0;

let taille = 0

function agrandir(){



    if(num2 != this.id.substr(5, this.id.length-5)){
        click_text_video2 = 0;
    }

    num2 = this.id.substr(5, this.id.length-5);



    console.log(num2)
    if (click_text_video2 == 0) {

        taille = document.querySelector("#video"+num2).style.width

        document.querySelector("#video"+num2).style.position = 'fixed'
        document.querySelector("#video"+num2).style.top = '0'
        document.querySelector("#video"+num2).style.left = '0'
        document.querySelector("#video"+num2).style.backgroundColor = 'rgb(0 0 0 / 70%)'
        document.querySelector("#video"+num2).style.width = '-webkit-fill-available'
        document.querySelector("#video"+num2).style.height = '100%'
        document.querySelector("#video"+num2).style.zIndex = '2'
        
        click_text_video2 = 1;
    }
    else {
        document.querySelector("#video"+num2).style.position = 'static'
        document.querySelector("#video"+num2).style.zIndex = '1'
        document.querySelector("#video"+num2).style.width = taille
        document.querySelector("#video"+num2).style.backgroundColor = 'rgb(0 0 0 / 0%)'
        click_text_video2 = 0;
    }
}

