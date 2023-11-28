//arrays to hold name, occupation information 
const names = ["Alice,", "Bob", "Carol"]
const occupations = ["writer", "teacher", "programmer"]

const startingPrice = Math.round(Math.random()*10)

//function to randomly select a name, occupation, price then put them in an object 
function randomInfo (){
    //randomly generate index for names and occupations arrays
    const randomName = Math.floor(Math.random()*names.length)
    const randomOccupation = Math.floor(Math.random()*occupations.length)
    //randomly generate a price between 1 and 100
    // const startingPrice = Math.round(Math.random()*100)
    
    const infoObject = {
        name: names[randomName],
        occupation: occupations[randomOccupation],
        startPrice: startingPrice
    }
    return infoObject
}

const randomInfoOne = randomInfo()
console.log(randomInfoOne)
const randomInfoTwo = randomInfo()
const randomInfoThree = randomInfo()
const choicesArray = [randomInfoOne, randomInfoTwo, randomInfoThree]

//access the div html elements 
const nameDiv = document.querySelector(".name-child")
const occupationDiv = document.querySelector(".occupation-child")
const startPriceDiv = document.querySelector(".starting-price-child")

const averagePrice = document.querySelector(".price")

function render() {
    const divName = choicesArray.map(function(item) {
        return `<div class='${item.name}'></div>`})
    const divOcc = choicesArray.map(function(item) {
        return `<div class='${item.occupation}'></div>`
    })
    const divPrice = choicesArray.map(function(item) {
        return `<div class='${startingPrice}'></div>`
    })
    // update the html elements with randomly seleceted information 
    nameDiv.innerHTML = divName.join("")
    occupationDiv.innerHTML = divOcc.join("")
    startPriceDiv.innerHTML = startingPrice
    averagePrice.innerHTML = startingPrice
}

//generate the shapes after every second
setInterval(function() {
    const obj = randomInfo()
    choicesArray.push(obj)
    render()
}, 1000)