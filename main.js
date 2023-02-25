let num = Math.floor(Math.random() * (10+1));

document.getElementById("submitBtn").onclick = function(){
    if(num <= 10 && num > 0){
        document.getElementById("myLabel").innerHTML = num + " is your lucky number.";
    }else if(num == 0){
        document.getElementById("myLabel").innerHTML = "Sorry! " + num +" is not a lucky number. Refresh the page and try again."    
    }else{
        document.getElementById("myLabel").innerHTML = "Refresh the page and try again";
    }
}