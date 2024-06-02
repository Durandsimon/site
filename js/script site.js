

document.querySelector("#zone1").addEventListener("click", depliant);
document.querySelector("#zone2").addEventListener("click", depliant);
document.querySelector("#zone3").addEventListener("click", depliant);
document.querySelector("#zone4").addEventListener("click", depliant);
document.querySelector("#zone5").addEventListener("click", depliant);


let click_text_video = 0;

let num = 0;


function depliant(){
    if(num != this.id.substr(4, 1)){
        click_text_video = 0;
    }
    
    num = this.id.substr(4, 1);
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