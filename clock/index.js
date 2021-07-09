setInterval(() => {
    d = new Date();
    stime = d.getSeconds();
    htime = d.getHours();
    mtime = d.getMinutes();
    srotation = 6*stime;
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
const hour = document.getElementById("second");
const i = document.getElementById("i");
const h = document.getElementById("tex").value;
const hou = document.getElementById("min");
const ho = document.getElementById("hi");
ho.style.transform =`rotate(${hrotation}deg)`;
hour.style.transform =`rotate(${srotation}deg)`;
hou.style.transform =`rotate(${mrotation}deg)`;
m = new Date();
time = m.getHours();
time2 = m.getMinutes();
time3 = m.getSeconds();
var bb = '0';        
var urr = document.getElementById('tex').value;
var ur = document.getElementById('texi').value;
var audio = new Audio('https://ayush-pro-ultra.github.io/audio/ringtone5.mp3');
if((time==urr) && (time2==ur) && (time3==bb)){

window.navigator.vibrate(1000);
alert("Alarm");
audio.play();

}



},1000)

function bal(){
alert("Please type hours 24 hour format");
alert("Ignore Console")
$("#alarm").toggle(1000);

}
