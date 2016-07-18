var start=0; var t=0.5;var left=0.5;
var ini;
document.addEventListener("keydown",eventing);


function invok(){
    document.getElementById('g1').style.left=parseFloat(document.getElementById('g1').style.left)-left+'vw';
    document.getElementById('g2').style.left=parseFloat(document.getElementById('g2').style.left)-left+'vw';
    document.getElementById('g3').style.left=parseFloat(document.getElementById('g3').style.left)-left+'vw';
    document.getElementById('g4').style.left=parseFloat(document.getElementById('g4').style.left)-left+'vw';

    if(parseFloat(document.getElementById('g1').style.left)<0)
    document.getElementById('g1').style.left=getRandomnumber()+"vw" ;

    if(parseFloat(document.getElementById('g2').style.left)<0)
        document.getElementById('g2').style.left=getRandomnumber()+"vw" ;
    if(parseFloat(document.getElementById('g3').style.left)<0)
        document.getElementById('g3').style.left=getRandomnumber()+"vw" ;
    if(parseFloat(document.getElementById('g4').style.left)<0)
        document.getElementById('g4').style.left=getRandomnumber()+"vw" ;
document.getElementById("_score").innerHTML=parseInt(document.getElementById('_score').innerText)+2;

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomnumber(){

var randomnumber = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
return randomnumber;
}
function up(){
    if(parseFloat(document.getElementById('_player').style.top)<20)
        t=-1*t;
    if(parseFloat(document.getElementById('_player').style.top)>45)
    {
        document.getElementById('_player').style.top='44vh';
        t=-1*t;
    clearInterval(ini);
    }

    document.getElementById('_player').style.top=parseFloat(document.getElementById('_player').style.top)-t+'vh';

}

function moveright(){
   document.getElementById('_player').style.left=parseFloat(document.getElementById('_player').style.left)+0.1+'vw';

}

function check(){
    var g = document.getElementById("g1");
    var played = document.getElementById("_player");
if (parseFloat(played.style.left) > parseFloat(g1.style.left) && parseFloat(played.style.left)<(parseFloat(g1.style.left)+parseFloat(played.style.width)) && parseFloat(played.style.top)>=parseFloat(g1.style.top) && parseFloat(played.style.top)<=44)
 console.log("touch");

}

function eventing(e) {
    this.body.style.backgroundColor = getRandomColor();
    if (e.keyCode == 32&& start==1) {
      ini=setInterval(up,12);
    }
    if (e.keyCode == 32 && start==0) {
        start = 1;
        var t = getRandomnumber();
        document.getElementById('g1').style.left = t + "vw";
        document.getElementById('g2').style.left = t+16 + "vw";
        document.getElementById('g3').style.left = getRandomnumber()+32 + "vw";
        document.getElementById('g4').style.left = getRandomnumber()+18 + "vw";
        setInterval(invok,60);
setInterval(moveright,200);
setInterval(check,1);
    }

}