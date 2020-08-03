const modal = document.getElementById("modalBox");

const btn = document.getElementById("modalBtn");

const cancel = document.getElementsByClassName("closeX")[0];

btn.onclick = function(){
    modal.style.display = "block";
    console.log("Modal is opening");
}

cancel.onclick = function(){
    modal.style.display = "none";
    console.log("Modal is closing");
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}