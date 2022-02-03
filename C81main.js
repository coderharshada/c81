canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 4;
ctx.arc(200,200,80,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);

}

function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 4;
ctx.arc(x,y,80,0,2*Math.PI);
ctx.stroke();
}