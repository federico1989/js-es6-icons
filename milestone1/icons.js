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
  objects.forEach((animal) => {
    container.append(
      `<div> <i class= "${animal.prefix} ${animal.type}"></i>
      <div class="title">${animal.name}</div> </div>
      `
    )
  });
}
