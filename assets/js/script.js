//1) On crée une variable tabList qui sera utilisée pour stocker les tâches. C'est un tableau vide au début.
let tabList = [];

//2) Cette fonction est appelée lorsqu'un utilisateur veut ajouter une nouvelle tâche

function addTask() {


let newTask = document.getElementById('newTask').value;
    
if (newTask !== '') {
    
    let taskObject = {
        id : Date.now(),
        task: newTask,
        completed:false // initialement définie sur false pour indiquer que la tâche n'est pas complétée lorsqu'elle est ajoutée
    };
    tabList.push(taskObject);
    updateTabList();
    document.getElementById('newTask').value = ''; // Effacer le champ de saisie après l'ajout

}

}



// 3/Cette fonction met à jour l'affichage de la liste des tâches. 

function updateTabList() {

    let tabListElement = document.getElementById('tabList');
    tabListElement.innerHTML = ' '; // effacer la liste existante
    
//On récupère l'élément de liste (ul) avec l'ID 'tabList'.
//On efface son contenu actuel.   
//On parcourt chaque tâche dans taskList et crée dynamiquement des éléments de liste (li) pour chaque tâche.
tabList.forEach(task => {
        let li = document.createElement('li');

//créer une case a cocher

let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = task.completed;
checkbox.addEventListener('change', function()  {
    task.completed =! task.completed;
    updateTabList();
});

// Ajouter la case à cocher à l'élément de liste
 li.appendChild(checkbox);

// Ajouter la description de la tâche à l'élément de liste
li.appendChild(document.createTextNode(task.task));

// Ajouter l'élément de liste à la liste principale
tabListElement.appendChild(li);
});
}


function displayInitialTabList(){
   tabList.push({ id : Date.now(),
                 task: 'Laver le visage',
                   completed:false });
   tabList.push({ id : Date.now(),
                  task: 'Mettre la crème Hydratante',
                completed:true });
     updateTabList();

    
   }
   displayInitialTabList();





























// let addTask = () => {
  
    //     let addTask = document.getElementById('addTask').value;
    //     let object = {};
    //     tabList.push(object);
    //     object.id = "id";
    //     object.task = addTask;
    //     object.state = "checked";
    //     let tabListJson = JSON.stringify(tabList);
    //     localStorage.setItem('Tableau', tabListJson);
    //     console.log(tabList);
    
    // }