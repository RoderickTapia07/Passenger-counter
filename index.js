



//The next is pseudocode of the things that I have to do to have the increment button working as intended.
// intialize the count as 0.
// listen for clicks on the increment button.
// increment the count variable when the button is clicked.
// change the count-el in the HTML to reflect the new count.

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    //console.log (count)
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - " // countStr stands for "countString"
    saveEl.textContent += countStr
    //Esta de arriba es la forma correcta y sencilla para solucionar el problema de los espacios en los guines.
    // let countStr = " " + count + " - " 
    // saveEl.innerText += countStr
    // Esta fue mi forma de solucionar el problema de los espacios, y aunque funciona, no es la manera mas eficiente.
    count = 0;
    countEl.textContent = count;
}

























//document.getElementById("count").innerText = 5

// let count = 5 / 7
// console.log(count)


// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// Solo un pequeño ejercicio de práctica con variables


// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// solo otro ejercicio


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Roderick Tapia"
// let greeting = "Welcome back, "
// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += "👋" (This is the same as welcomeEl.innerText = welcomeEl.innerText + "👋")
//console.log(welcomeEl)
//Otro ejercicio.
