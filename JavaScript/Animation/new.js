var deg=1;var t=0.1;var inc=10;
var x=0;var y=0;
var pi=3.14;var radius=1;
var radian=(pi*deg)/180;
var col=getRandomColor();

function show(){
var di=document.getElementById("container");
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
col=getRandomColor();
radian=(pi*deg)/180;
ctx.strokeStyle = getRandomColor();
x=160+Math.sin(radian)*radius;
y=90+Math.cos(radian)*radius;
ctx.beginPath();
ctx.arc(x,y,7,0,2*Math.PI);
di.style.left=x;
di.style.top=y;

ctx.fillStyle =col;
ctx.fill();
ctx.stroke();
deg=deg+inc;
radius=radius+t;
if(radius==260)
t=-1*t;
if(radius==0)
t=-1*t;


}
function change(){
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRect(0, 0, canvas.width, canvas.height);
inc=inc+30;
}
function get(){
var i=window.setInterval("show()",20);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
