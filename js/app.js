var txtInput= document.querySelector("#textarea")
var btnInput = document.querySelector("#btn")


function clickHandler(){
    window.location.reload(false); 
    alert("Congratulations!! You've sucessfully subscribe us. You'll regularly recieve email from us regarding healthCare🏥")
}

btnInput.addEventListener("click",clickHandler)
