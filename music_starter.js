

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(211,211,211);
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(40);

   let otherHeartMap = map(other,0,100,0.2,1)
   let otherHeart2Map = map(other,30,100,0.1,1)

   let vocalHeartMap = map(vocal,0,100,0.2, 1)
   let vocalHeart2Map = map(vocal,60,100,0.1, 1)

   let bassHeartMap = map(bass,0,100,0.2, 1)
   let bassHeart2Map = map(bass,60,100,0.2, 1)

   let drumHeartMap = map(drum,0,100,0.2, 1)
   let drumHeart2Map = map(drum,60,100,0.2, 1)
 
  //heart other
  push();
  fill(184,190,221);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/1.3, 3 * height / 4, otherHeartMap, 45);
  pop();
 

  //heart other2
  push();
  fill(173, 216, 230);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/1.3, 3 * height / 4, otherHeart2Map, 45);
  pop();
  

  //heart vocal
  push();
  fill(239,195,230);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/4, 3 * height / 4, vocalHeartMap, -45);
  pop();

  //heart vocal2
  push();
  fill(244,151,218);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/4, 3 * height / 4, vocalHeart2Map, -45);
  pop();

  //heart bass
  push();
  fill(196, 144, 209);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/4, 1.5 * height / 5, bassHeartMap, -45);
  pop();

  //heart bass2
  push();
  fill(180, 159, 204);
  stroke(255, 255, 255);
  strokeWeight(15);
  heart(width/4, 1.5 * height / 5, bassHeart2Map, -45);
  pop();

   //heart drum
   push();
   fill(255, 246, 137);
   stroke(255, 255, 255);
   strokeWeight(15);
   heart(width/1.3, 1.5 * height / 5, drumHeartMap, 45);
   pop();

   //heart drum2
   push();
   fill(255, 209, 102);
   stroke(255, 255, 255);
   strokeWeight(15);
   heart(width/1.3, 1.5 * height / 5, drumHeart2Map, 45);
   pop();

   
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
   fill(0,0,0);
}

//function for hearts
function heart(x, y, otherHeartMap, heartRotate){ //rotation, scale
  
  push();
  translate(x, y);
  scale (otherHeartMap);
  rotate(heartRotate);
  // scale(1);

//left half of heart
  beginShape();
  curveVertex(1, -125);
  curveVertex(1, -125);//top of heart
  curveVertex(-100, -175);
  curveVertex(-200, -75);
  curveVertex(1, 175);//bottom point of heart
curveVertex(1, 175);
endShape();

//right half of heart
beginShape();
curveVertex(-1, -125);
curveVertex(-1, -125);//top of heart
curveVertex(100, -175);
curveVertex(200, -75);
curveVertex(-1, 175);//bottom point of heart
curveVertex(-1, 175);
endShape();
pop();
}