
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(197, 195, 198)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(40);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   // vocal bar is purple
   fill(205,180,219);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is light green
   fill(199, 249, 204);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is pink
   fill(255,175,204);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is light blue
   fill(189,224,254);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
   fill(0,0,0);
}