


function createDiv(){
    for(let i = 0; i < 3; i++){
        const button = document.createElement("button");
        button.textContent = "button 1";
        document.getElementById("main-movie-list").appendChild(button);
    }
}

window.onload = function(){
    createDiv();
}