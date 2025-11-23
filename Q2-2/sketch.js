function setup() {
 const size = width / 8;
 noStroke();
 for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8;j++){
    if((i+j)%2 === 0){
      Fill(255);
    } else {
      Fill(120)
    }
    rect(size * j,size * i,size,size);
    if((i+j)%2 === 1 && (i<3)){
      Fill(255 , 0, 0)
      ellipse(size * j + size / 2, size * i + size / 2, 20, 20);
    }
    if((i+j)%2 === 1 && (i>4)){
      Fill(0)
      ellipse(size * j + size / 2, size * i + size / 2, 20, 20);
    }
  }
 }
}