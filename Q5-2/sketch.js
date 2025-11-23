// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);
}

function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}

function balloon(t, x, y){
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)

  push();
  fill(0, 100, 255); // 吹き出しの色（青っぽく）
  noStroke();
  rect(x, y, w + p * 2, h + p * 2, 10); 
  const tx1 = x + (w + p * 2) / 2 - 10; // 三角形の左端
  const ty1 = y + h + p * 2;            // 四角形の下辺
  const tx2 = tx1 + 20;                 // 三角形の右端
  const ty2 = ty1;                      // 同じ高さ
  const tx3 = tx1 + 10;                 // 三角形の頂点（中央）
  const ty3 = ty1 + 15;                 // 下に伸ばす
  triangle(tx1, ty1, tx2, ty2, tx3, ty3);


  // BLANK[1] 吹き出しの背景を先に描く

  // BLANK[2] 吹き出しの三角形を描く

  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);
  
  pop();
}