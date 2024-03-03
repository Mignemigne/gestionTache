/*Ceci est le code qui est relier avec le bouttons pour s'inscrire.*/
function local(){
    /*Cet ligne sert à prendre le Id de l'adresse email que l'utilisateur à écrit*/
    let email= document.getElementById("email").value;
    /*Cet ligne sert à prendre le Id du mot de passe que l'utilisateur à écrit*/
    let motDePasse = document.getElementById("motDePasse").value;
    /*Cet ligne sert à prendre le Id du mot de passe qui à été répété que l'utilisateur à écrit*/
    let repetitionMotDePasse = document.getElementById("repetitionMotDePasse").value;
    /*Cet ligne sert à prendre le Id de la checkbox que l'utilisateur à cocher*/
    let souvenir = document.getElementById("souvenir").value;
    /*C'est ligne de code servent à mettre les informations écrit comme celle du email, du mot de passe, du mot de passe répété et de la checkbox cocher dans le local storage*/
    localStorage.setItem("email", email);
    localStorage.setItem("motDePasse", motDePasse);
    localStorage.setItem("repetitionMotDePasse", repetitionMotDePasse);
    localStorage.setItem("souvenir", souvenir);
    /*Aprè avoir obtenu c'est information. La page va se diriger vers connection.html*/
    window.location = "connection.html"
}


/*Quand ont appui sur le bouttons effacer cela efface le local storage*/
function effacer(){
    window.localStorage.clear()
}


/*Ceci est le boutton qui sert à quittez la page*/
document.getElementById("quittez").addEventListener("click", quittez);
/*Ceci est l'endroit où l'utilisateur est redirigé après avoir appuyer sur le boutton*/
function quittez(){
    window.location = "vue_de_lancement.html"
};