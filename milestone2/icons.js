// $(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const objects = [
  {
    name: "cat",
    prefix: "fas",
    type: "fa-cat",
    family: "animals"
  },
  {
    name: "dog",
    prefix: "fas",
    type: "fa-dog",
    family: "animals"
  },
  {
    name: "crow",
    prefix: "fas",
    type: "fa-crow",
    family: "animals"
  },
  {
    name: "dove",
    prefix: "fas",
    type: "fa-dove",
    family: "animals"
  },
  {
    name: "dragon",
    prefix: "fas",
    type: "fa-dragon",
    family: "animals"
  },
  {
    name: "horse",
    prefix: "fas",
    type: "fa-horse",
    family: "animals"
  },
  {
    name: "hippo",
    prefix: "fas",
    type: "fa-hippo",
    family: "animals"
  },
  {
    name: "fish",
    prefix: "fas",
    type: "fa-fish",
    family: "animals"
  },
  {
    name: "carrot",
    prefix: "fas",
    type: "fa-carrot",
    family: "food"
  },
  {
    name: "apple-alt",
    prefix: "fas",
    type: "fa-apple-alt",
    family: "food"
  },
  {
    name: "lemon",
    prefix: "fas",
    type: "fa-lemon",
    family: "food"
  },
  {
    name: "pepper-hot",
    prefix: "fas",
    type: "fa-pepper-hot",
    family: "food"
  },
  {
    name: "user-astronaut",
    prefix: "fas",
    type: "fa-user-astronaut",
    family: "user"
  },
  {
    name: "user-graduate",
    prefix: "fas",
    type: "fa-user-graduate",
    family: "user"
  },
  {
    name: "user-ninja",
    prefix: "fas",
    type: "fa-user-ninja",
    family: "user"
  },
  {
    name: "user-secret",
    prefix: "fas",
    type: "fa-user-secret",
    family: "user"
  },
  ]
  // console.log(objects);
  // definiamo dei colori per le icone (blue, orange, purple)
  const container = document.querySelector(".icons");
  // console.log(container);
  //aggiungiamo dei colori usando una funzione


  //inseriamo le icone colorate nel container

  const newArray = objects.map(element => {
    if (element.family === "animals") {
      var newColor = "blue";
    }else if (element.family === "food") {
      var newColor = "orange";
    }else {
      var newColor = "purple";
    }
    let newObjects = {...element, color:newColor};
    return newObjects;
    // console.log(newObjects);
  });
  // console.log(newArray);


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
printObj(newArray,container);
function printObj (array, selector){
  array.forEach(element => {
    const {name,prefix,type,color} = element;
    selector.innerHTML += `<div>
      <i class="${prefix} ${type}" style="color:${color}"></i>
      <div class="title">${name.toUpperCase()}</div>
      </div>
      `
    // console.log(element);
  });
}
//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map
// }
// });

//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
