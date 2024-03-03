/*Cette commande à pour but de reirige l'utilisateur vers une autre page qui est inscription.html*/
document.getElementById("PageInscription").addEventListener("click", inscrire);

/*Quand l'utilisateur appuie sur le boutton s'inscrire, cela redirige l'utilisateur vers la page inscription.html*/
function inscrire(){
    window.location = "inscription.html"
};

/*Cette commande à pour but de reirige l'utilisateur vers une autre page qui est connection.html*/
document.getElementById("PageConnection").addEventListener("click", connection);

function connection(){
    window.location = "connection.html"
};
