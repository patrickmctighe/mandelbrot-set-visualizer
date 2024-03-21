function setup() {
  createCanvas(360, 360);
  pixelDensity(1);
}

function draw() {
  background(220);


  let maxiterations = 100;
  loadPixels();
  for(let x = 0; x< width; x++){
    for(let y = 0 ; y<height;y++){


let a = map(x, 0, width, -2,2);
let b = map(y, 0, height, -2,2);

let ca= a;
let cb = b;

let n = 0;


while(n<maxiterations){
  let aa = a*a - b*b;
  let bb = 2*a*b;
  a = aa+ca;
  b = bb+cb;

if(abs(a+b) > 16){
  break;
}

  n++;
}
let bright = map(n, 0, maxiterations, 0, 1);
bright = map(sqrt(bright), 0, 1, 0, 255);
// floor(n*16) % 255;
// map(n, 0, maxiterations, 0, 255);

if (n===maxiterations){
  bright = 0;
}


      let pix = (x+y*width)*4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();


}