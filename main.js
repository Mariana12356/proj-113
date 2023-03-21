function preload() {
img = loadImage("cavalos.jpg")
}

function setup() {
canvas = createCanvas(640,400)
color = ""
}

function draw() {
image(img,0,0,640,400)
tint(color)
}

function aplicar_cor(){
color = document.getElementById("cor").value 

}

function takeSnapshot(){
    save("foto.png")
}
