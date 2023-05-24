let color = "#000"
let board = document.getElementById("board")
let ctx = board.getContext("2d")

function colorChange() {
    color = document.getElementById("colorPicker").value
    console.log(color)
}

function draw(event, color) {
    mouseX = event.clientX -5
    mouseY = event.clientY - 60
    console.log(mouseX + ", " + mouseY)

    ctx.fillStyle = color
    ctx.arc(mouseX, mouseY, 2*Math.PI, 0, 2*Math.PI);
    ctx.stroke(); 
}