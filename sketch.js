let spider
let pumkin
function setup() {
  createCanvas(667, 550);
  spider = loadImage("spider.png")
  pumkin = loadImage("lantern.png")
  imageMode(CENTER)
}

function draw() {
  background(220);
  image(spider, mouseY+59, mouseX+59, 80, 60)
  image(pumkin, mouseX, mouseY, 80, 60)
}