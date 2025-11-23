// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0;
let size = 50; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  
  background(160, 192, 255) // アニメーションの速さ
  // BLANK[2]
  count = (count + 1 ) % cycle;

  if (keyIsPressed) {
    count = (count + 2) % cycle;
  }
  if (count < cycle / 2) {
    size = 50 + cycle - count;
  } else {
    size = 50 + count;
  }
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(width / 2, height / 2, size);
}
