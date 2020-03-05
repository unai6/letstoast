let url='https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'

/*
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});*/

const aGlass = [];

function addGlassList(){

    let glassList = document.getElementById('glass-list');
  
    aGlass.forEach(glass =>{

    let newGlass= document.createElement('div')
    newGlass.innerHTML = `
    Vasos: ${glass.Glass}
    `
    glassList.appendChild(newGlass)
    })

}

addGlassList()

let quitGlass = document.getElementsByClassName('remove-glass-btn')[0]

function removeGlass(){
    let glassList = document.getElementById('glass-list');

    let lastChild = glassList.lastChild

    glassList.removeChild(lastChild);
    aGlass.pop()

}

quitGlass.onclick = removeGlass


let addNewGlass = document.getElementsByClassName('add-glass-btn')[0]

function oneGlass(){
   
    let glassList= document.getElementById('glass-list')

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let oneMoreGlass = {
            Glass:data.drinks[0].strGlass
           
        }
        

        glassList.innerHTML ='';
        aGlass.push(oneMoreGlass);
      
        addGlassList()
        
    });
    
}

addNewGlass.onclick = oneGlass

