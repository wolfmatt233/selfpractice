let wordCount = 0 //set initial count value
let countLetters = document.getElementById("countChars")
let countWords = document.getElementById("countWords")

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str)
}

function count() {
    let textBox = document.getElementById("typeBox").value //update textBox value each time function starts

    //if two spaces are in a row, don't count them
    if(textBox.slice(-1) == " " &&  textBox.charAt(textBox.length-2) == " ") {
        return
    } 
    //if there is a space then a number or letter, increase word count
    if(textBox.slice(-1) == " " &&  isAlphanumeric(textBox.charAt(textBox.length-2))) {
        wordCount++
        countWords.innerHTML = wordCount
        return
    }

    //increase letters 
    countLetters.innerHTML = textBox.length
}