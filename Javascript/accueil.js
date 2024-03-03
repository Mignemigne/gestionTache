/*Cette commande à pour but de reirige l'utilisateur vers une autre page qui est vue_de_lancement.html*/
document.getElementById("redirigePage").addEventListener("click", redirige);

function redirige(){
    window.location = "vue_de_lancement.html"
};


/*Cette commande à pour but de reirige l'utilisateur vers une autre page qui est MatrixMessage.html*/
document.getElementById("redirigeMatrix").addEventListener("click", matrix);

function matrix(){
    window.location = "MatrixMessage.html"
};