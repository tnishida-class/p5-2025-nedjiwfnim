let x, y;
let vx, vy;
const g = 1; // 重力加速度
let onGround = false; // 地面にいるかどうか

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);

  const size = height * 0.1;   // キャラの大きさ
  const groundY = height * 0.8; // 地面の高さ

  // ===== 地面を描く =====
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // ===== 要件1・2：左右移動（加速キーあり） =====
  let accel = 0.5; // 通常加速度

  // 好きなキー (Z / X) を押している間だけ加速
  if (keyIsPressed && (key === 'z' || key === 'Z' || key === 'x' || key === 'X')) {
    accel = 1.0;
  }

  if (keyIsDown(LEFT_ARROW)) {
    vx -= accel;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    vx += accel;
  }

  // ===== 要件3：ジャンプ（空中ジャンプ禁止） =====

  // 重力をかける
  vy += g;

  // 地面との接地判定
  if (y + size / 2 >= groundY) {
    y = groundY - size / 2;
    vy = 0;
    onGround = true;
    if(keyIsDown(UP_ARROW)){
      vy=-20
    }
  } else {
    onGround = false;
  }

  // 速度制限（速すぎ防止）
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置更新
  x += vx;
  y += vy;


  // ===== キャラクターを描く =====
  fill(0);
  ellipse(x, y, size, size);
}

