// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

var musiclist=['/musics/MT-1.mp3','/musics/MT-2.mp3','/musics/MT-3.mp3','/musics/MT-4.mp3','/musics/MT-5.mp3','/musics/MT-6.mp3','/musics/MT-7.mp3'];
var artistname=["MODERN TALKING", "MODERN TALKING", "MODERN TALKING", "MODERN TALKING", "MODERN TALKING", "MODERN TALKING", "MODERN TALKING"];
var tracknamelist=["No face, no name, no number", "Cherry cherry lady", "In 100 years", "Sexy sexy lover", "You are my heart, you are my soul", "Brother Louise","You can win if you want"];
var artimg=["/pictures/no face no name no number.jpg", "/pictures/cherry cherry lady.jpg", "/pictures/in 100 years.jpg", "/pictures/sexy sexy lover.jpg", "/pictures/your are my heart you are my soul.jpg","/pictures/brother louie.jpg","/pictures/you can win if you want.jpg"];


i=0;


function play(){
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById('playbutton').className="fas fa-pause-circle fa-3x";
    document.getElementById('playbutton').title="pause"

    var a=[0.1,0.2,0.3,0.4,0.3,0.2,0.1];
    var loader1=document.getElementsByClassName("stroke");
    for(j=0;j<loader1.length;j++){
    loader1[j].style.display="block";
    loader1[j].style.animation="wave 0.5s linear infinite";
    loader1[j].style.animationDelay=a[j]+"s";
    }

    document.getElementById("art").style.animation="plak 5s linear infinite";
}

function pause(){
    var audio = document.getElementById("audio");
    audio.pause();
    document.getElementById('playbutton').className="fas fa-play-circle fa-3x";
    document.getElementById('playbutton').title="play"

    var a=[0.1,0.2,0.3,0.4,0.3,0.2,0.1];
    var loader1=document.getElementsByClassName("stroke");
    for(j=0;j<loader1.length;j++){
    loader1[j].style.display="none";
    }

    document.getElementById("art").style.animation="";
}

function playpause(){
    if(playbutton.className=='fas fa-play-circle fa-3x'){
    play();
    }
    else if(playbutton.className=='fas fa-pause-circle fa-3x'){
    pause();
    }
}


// audio.ontimeupdate=function(){
//     o=audio.currentTime;
//     document.cookie="position="+o+"; expires=Thu, 18 Dec 2023 12:00:00 UTC";
// };



// var cookie=parseInt(getCookie("number"));
// if(cookie==NaN){
// i=0;
// }else{
//     i=cookie;
// }
// document.getElementById("audio").src=musiclist[i];

// var cookie2=parseInt(getCookie("position"));
// console.log(cookie2);
// if(cookie2==NaN){
//     audio.currentTime=0;
// }else{
//     audio.currentTime=cookie2;
// }

function next(){
    document.getElementById('audio').src=musiclist[i];
    document.getElementById("trackartist").innerHTML=artistname[i];
    document.getElementById("trackname").innerHTML=tracknamelist[i];
    document.getElementById("art").src=artimg[i];
    i++;
if(i>musiclist.length){
    i=0;
}
play();
    document.cookie="number="+i+"; expires=Thu, 18 Dec 2023 12:00:00 UTC";

    document.getElementById("seekslider").value="0";
}

function back(){
    document.getElementById('audio').src=musiclist[i];
    document.getElementById("trackartist").innerHTML=artistname[i];
    document.getElementById("trackname").innerHTML=tracknamelist[i];
    document.getElementById("art").src=artimg[i];
    i--;
    if(i<0){
i=musiclist.length-1;
    }
play();
}

function random(){
document.getElementById('audio').src=musiclist[i];
document.getElementById("trackartist").innerHTML=artistname[i];
document.getElementById("trackname").innerHTML=tracknamelist[i];
document.getElementById("art").src=artimg[i];
i=Math.floor(Math.random()*musiclist.length);
document.getElementById('playbutton').className="fas fa-pause-circle fa-3x";
}

function repeat(){
    document.getElementById('audio').src=musiclist[i];
    document.getElementById("trackartist").innerHTML=artistname[i];
    document.getElementById("trackname").innerHTML=tracknamelist[i];
    document.getElementById("art").src=artimg[i];
    i=i*1;
}

// function after(){
//     if(playpause.className=="fas fa-play-circle fa-3x"){
// next();
//     }
//     else if(randombutton.className=="fas fa-random fa-2x"){
// random();        
//     }
//     else if(nextbutton.className=="fas fa-step-forward fa-2x"){
// next();
//     }
//     else if(backbutton.className=="fas fa-step-forward fa-2x"){
// back();
//     }
//     else if(repeatbutton.className=="fas fa-repeat fa-2x"){
// repeat();
//     }
// }

function setVolume(volume_value){
        document.getElementById("audio").volume = volume_value / 100; 
    }

function seekTo(seek_slider){
        var seekto= document.getElementById("audio").duration*(seek_slider/100);
        document.getElementById("audio").currentTime=seekto;
    }

function mute(){
    if(mutebutton.className=="fa-solid fa-volume-down"){
audio.volume=1;
document.getElementById("mutebutton").className="fas fa-volume-mute";
    }else if(mutebutton.className=="fas fa-volume-mute"){
audio.volume=0;
document.getElementById("mutebutton").className="fa-solid fa-volume-down";
    }
}

function period(){
    var music = document.getElementById("audio");
    var currentperiod=Math.floor(music.currentTime/60)+":"+Math.floor(music.currentTime-Math.floor(music.currentTime/60)*60);
    var durationperiod=Math.floor(music.duration/60)+":"+Math.floor(music.duration-Math.floor(music.duration/60)*60);

    if(currentperiod<10){
currentperiod= "0" + currentperiod;
    }
    if(durationperiod<10){
durationperiod= "0" + durationperiod;
    }

    document.getElementById("crrtime").innerHTML=currentperiod;
    document.getElementById("ttltime").innerHTML=durationperiod;
}

