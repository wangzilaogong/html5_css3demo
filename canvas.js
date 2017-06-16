/**
 * Created by wk on 2017-06-15.
 */
 function draw(id){
    var canvas = document.getElementById(id);
    var  context =canvas.getContext('2d');
    context.fillStyle = "#000";
    context.strokeStyle = "#f60";
    context.lineWidth = 5;
    context.fillRect(0,0,400,300);
    context.strokeRect(50,50,180,120);
    context.strokeRect(100,100,180,120);
}