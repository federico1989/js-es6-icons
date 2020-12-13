$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
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
console.log(objects);
  // Selezioniamo il container icons
const container = $(".icons");
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

print(container, objects);

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

const print = (container, objects) => {
  objects.forEach((icons) => {
    container.append(
      `<div> <i class="${icons.prefix} ${icons.type}"></i>
      <div class="title">${icons.name}</div> </div>
      `
    )
    console.log(icons.name);
  });


}
