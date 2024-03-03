/*Ceci récupère le input pour afficher au même endroit que le input*/
const taskInput = document.getElementById("taskInput");
/*Ceci va récuper le bouton pour qu'il puisse être lié avec le javascript*/
const addTaskBtn = document.getElementById("addTaskBtn");
/*Ceci va récupérer la liste où les tâches von être afficher*/
const taskList = document.getElementById("taskList");

/*Ceci sert à quand l'utilisateur click sur le bouton ceci le relis au javascript*/
addTaskBtn.addEventListener("click", addTask);

/*Ceci est le code de la function addTask(quand ont veut ajouter une tâche*/
function addTask(){
    /*Ceci sert à dire que peut importe ce qui est écrit(il n'y a pas de limite de mot) le code prend ce qui est écrit*/
    const taskText = taskInput.value.trim();
    /*Si il est écrit qu'elle que chose, il peut effectuer ce qui est en dessous.*/
    if(taskText !== ""){
        /*Ceci ser à dire que après l'inscription d'information par l'utilisateur il doit créer un li(donc une liste avec un point) */
        const listItem = document.createElement("li");
        /*Ceci dit que ce que le contenu du texte écrit est égal à la tâche*/
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        /*La valeur du texte n'est pas déjà choisi(nul) donc ont affiche le code écrit par l'utilisateur*/
        taskInput.value = "";
        
        /*ceci sert à supprimer l'élément créer a`l'aide du boutton*/
        const deleteBtn = document.createElement("button");
        /* Le nom du boutton est supprimer*/
        deleteBtn.textContent = "Supprimer";

        
        /*Cela supprime l'item*/
        listItem.appendChild(deleteBtn);
        /*Quand ont l'utilisateur click sur le boutton ce retire l'élément de la liste*/
        deleteBtn.addEventListener("click",()=>{
            listItem.remove();
        });

        
        
        /*Si c'est autre chose, il y a un message d'alert qui dit "Veuillez entrer une tâche valide. */
    }else{
        alert("Veuillez entrer une tâche valide. ");
    }
}



/*Si ont click sur le boutton, cela ajoute une tâche*/
addTaskBtn.addEventListener("click", addTask);

/*Si ont appuie sur ce boutton "☰", ca ouvre la sidebar*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
/*Si ont appuie sur ce boutton "close", ca ferme la sidebar*/
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}