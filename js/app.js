var txtInput= document.querySelector("#textarea")
var btnInput = document.querySelector("#btn")


function clickHandler(){
    window.location.reload(false); 
    alert("Congratulations!! You've successfully subscribed us. We'll regularly send you emails regarding healthCare🏥")
}

btnInput.addEventListener("click",clickHandler)
