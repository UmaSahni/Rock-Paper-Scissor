var options = ["rock", "paper", "scissors"]
var optionsImage = ["./images/rock.png", "./images/paper.png","./images/scissors.png"]
let random = Math.floor(Math.random()*3) 
console.log(random)

function computerOption(){
    return Math.floor(Math.random()*3)
}


function chooseRock(){
    var computerValue = computerOption()
    var comOption = options[computerValue]
    var yourOption = options[0]
    var result = winFunction(comOption, yourOption)
    console.log(result)
    showResult(result)
    displayOption(computerValue,0)
   
}
function choosePaper(){
    var computerValue = computerOption()
    var comOption = options[computerValue]
    var yourOption = options[1]
    var result = winFunction(comOption, yourOption)
  showResult(result)
  displayOption(computerValue,1)
}
function chooseScissor(){
    var computerValue = computerOption()
    var comOption = options[computerValue]
    var yourOption = options[2]
    var result = winFunction(comOption, yourOption)
    showResult(result)
    displayOption(computerValue,2)
}


const winFunction = (com, you) =>{
   if(com==you) return null
    
    else if(com === "paper" && you ==="scissors")return true
    else if(com === "rock" && you ==="paper")return true
    else if(com === "scissors" && you ==="rock") return true

   return false

}

// draw === null;
// Win === true;
// Loose === false

function showResult (result) {
    let resultTag = document.getElementById("result")
    if(result){
        resultTag.innerText = "Yay! You Win!"
    }
    else if(result == false){
        resultTag.innerText="You loose"
    }
    else{
        resultTag.innerText="Math Draw... Please try again!"
    }
}


function displayOption (computer, you){
    let comVal = document.getElementById("computer-option")
    var yourValue = document.getElementById("your-option")
    comVal.innerHTML = "";
    yourValue.innerHTML = "";

    var comImage = document.createElement("img")
    var youImage = document.createElement("img")

    comImage.src = optionsImage[computer]
    youImage.src= optionsImage[you]

    comVal.append(comImage)
    yourValue.append(youImage)

}