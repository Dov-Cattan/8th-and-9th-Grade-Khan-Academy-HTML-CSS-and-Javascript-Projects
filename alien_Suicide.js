var aa = 127;
var a = 250;
var b = 32;
var x = 114;
var y = 99;
var w = 22;
var bodyX = 203;
var bodyY = 223;
var bodyW = 166; 
var bodyH = bodyW*3/4;
var faceSize = 99;
var eyeSize = 22;
var mouthSize=24;
var earSize=faceSize/5;

draw = function()  {
    stroke(0, 0, 0);
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY+20, bodyW, bodyH); // body?
    ellipse(bodyX, bodyY-70, y, y); // face
    fill(0, 0, 0);
    ellipse(bodyX-23,aa,w,w);
    ellipse(bodyX +23,aa,w,w);
    //eyes
    fill(250, 120, 120);
    ellipse(bodyX,bodyY-36,mouthSize+20,mouthSize);
    fill(0, 30, 255);
    rect(141,116,earSize,earSize+20);
rect(242,116,earSize,earSize+20);
fill(190, 15, 217);
rect(48,200,114,30);
rect(250,200,114,30);
fill(141, 184, 0);
rect(133,272,52,191);
rect(222,272,52,191);
fill(84, 52, 52);
ellipse(45,a,40,78);
fill(117, 115, 115);
rect(352,74,32,158);
fill(3, 82, 0);
rect(340,183,59,23);
fill(0, 255, 170);
ellipse(205,261,167,128);
line(171,119,128,41);
line(236,119,263,41);
fill(255, 255, 255);
rect(197,153,10,10);
noStroke();
fill(255, 123, 0);
    ellipse(1,1, 200,200);
fill(255, 0, 0);
ellipse(44,464,b,b);

aa = aa + 1/60;
a= a + 1;
b = b  + 1/2;
x = x + 0;
y = y + 0;
w= w + 0;
};
