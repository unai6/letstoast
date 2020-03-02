//búsquedas a la API

fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  }); 
fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});
fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

