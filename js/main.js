let attempts = 0;
let myNum = Math.floor(Math.random() * 100) + 1;
function getNum (){
    attempts++;
    var val = parseInt(document.getElementById("num").value);
    document.getElementById("countAtt").innerHTML = 15 - attempts;
    if(val == myNum){
        if(attempts == 1){
        document.getElementById("text").innerHTML = "Congratulations! You guessed the number " + myNum + " after spending " + attempts + " attempt";
        document.getElementById("num").value = "";
        document.getElementById("text2").style.display = "none"
        document.getElementById("num").style.display = "none";
        document.getElementById("butt").style.display = "none";
        document.getElementById("newGame").style.display = "inline";
        }else{
            document.getElementById("text").innerHTML = "Congratulations! You guessed the number " + myNum + " after spending " + attempts + " attempts";
        document.getElementById("num").value = "";
        document.getElementById("text2").style.display = "none"
        document.getElementById("num").style.display = "none";
        document.getElementById("butt").style.display = "none";
        document.getElementById("newGame").style.display = "inline";
        }
    }else if(attempts >= 15){
        document.getElementById("text").innerHTML = "The attempts are over. My number was " + myNum;
        document.getElementById("text2").style.display = "none"
        document.getElementById("num").style.display = "none";
        document.getElementById("butt").style.display = "none";
        document.getElementById("newGame").style.display = "inline";
    }else if(val < myNum){
        document.getElementById("text").innerHTML = "My number is bigger";
        document.getElementById("num").value = "";
    }else if(val > myNum){
        document.getElementById("text").innerHTML = "My number is less";
        document.getElementById("num").value = "";
    }
}
function startNewGame(){
    myNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    document.getElementById("num").style.display = "inline";
    document.getElementById("butt").style.display = "inline";
    document.getElementById("newGame").style.display = "none";
    document.getElementById("text").innerHTML = "Enter a number";
    document.getElementById("text2").style.display = "inline";
    document.getElementById("countAtt").textContent = "15";
    document.getElementById("num").value = "";
    attempts = 0;
}
