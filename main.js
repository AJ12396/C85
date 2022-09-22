 var canvas = new fabric.Canvas("meuCanvas")
 var playerX = 10
 var playerY = 10
 var larguraBloco = 30
 var alturaBloco = 30
 var playerObject = " "
 var blocoObject = " "

 function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerObject)
    })
 }
 function newImage(getImg) {
    fabric.Image.fromURL(getImg, function(Img){
        blocoObject = Img
        blocoObject.scaleToWidth(larguraBloco)
        blocoObject.scaleToHeight(alturaBloco)
        blocoObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blocoObject)
    })
 }

 window.addEventListener("keydown",meuKeydown)
function meuKeydown(e) {
    var keyPressed = e.keyCode
    console.log(keyPressed)
    if (e.shiftKey==true && keyPressed=="80") {
        console.log("shift+P")
        larguraBloco = larguraBloco+10
        alturaBloco = alturaBloco+10
        document.getElementById("largura-atual").innerHTML= larguraBloco
        document.getElementById("altura-atual").innerHTML= alturaBloco
    }
    if (e.shiftKey==true && keyPressed=="79") {
        console.log("shift+O")
        larguraBloco = larguraBloco-10
        alturaBloco = alturaBloco-10
        document.getElementById("largura-atual").innerHTML= larguraBloco
        document.getElementById("altura-atual").innerHTML= alturaBloco
    }
    if (keyPressed=="87") {
        up()
    }
    if (keyPressed=="65") {
        left()
    }
    if (keyPressed=="68") {
        right()
    }
    if (keyPressed=="83") {
        down()
    }

    if (keyPressed=="70") {
        console.log("F")
        newImage("cloud.jpg")
    }

    if (keyPressed=="71") {
        console.log("G")
        newImage("dark_green.png")
    }
    if (keyPressed=="72") {
        console.log("H")
        newImage("ground.png")
    }
    if (keyPressed=="74") {
        console.log("J")
        newImage("light_green.png")
    }
    if (keyPressed=="75") {
        console.log("K")
        newImage("roof.jpg")
    }
    if (keyPressed=="76") {
        console.log("L")
        newImage("trunk.jpg")
    }
    if (keyPressed=="73") {
        console.log("I")
        newImage("unique.png")
    }
    if (keyPressed=="79") {
        console.log("O")
        newImage("wall.jpg")
    }
    if (keyPressed=="80") {
        console.log("P")
        newImage("yellow_wall.png")
    }
}

function up() {
    if (playerY>=0) {
        playerY= playerY-alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function down() {
    if (playerY<=500) {
        playerY= playerY+alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function left() {
    if (playerX>=0) {
        playerX= playerX-alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function right() {
    if (playerX<=750) {
        playerX= playerX+alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}

