let url='https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'

const aGlass = [];

function addGlassList(){
  
  let glassList = document.getElementById('glass-list');
  let newGlass = document.createElement('div')
  
  aGlass.map(glass => {
    //console.log(glass.Glass)
    newGlass.setAttribute('class', 'css-glass ');  
    newGlass.innerHTML =  `
    ${glass.Glass.join(' ')}
    `     
  });
  glassList.appendChild(newGlass);
};


let getAllGlasses = document.getElementsByClassName('add-glass-btn')[0];
getAllGlasses.onclick = getGlasses;

    function getGlasses(){
      
        let glassList= document.getElementById('glass-list')
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
          let allGlasses = {
              Glass: data.drinks.map(glass => {
                //console.log(glass)
                return (
                  `    
                  <p class='card col-lg-6 mx-auto'>${glass.strGlass}</p>        
                  `
                  );
                })
              };
              
              glassList.innerHTML = '';
            aGlass.push(allGlasses);
            //console.log(aGlass)
            
            addGlassList()
            
        });
      
      let quitGlass = document.getElementsByClassName('remove-glass-btn')[0]
      
      ///// Remove-glass
      function removeGlass(){
          let glassList = document.getElementById('glass-list');
      
          glassList.removeChild(glassList.lastChild);
         
      
      }
      
      quitGlass.onclick = removeGlass

        
    }



///////// fetch to get glasses



function getFamousCocktailsList() {
 
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    console.log(data.drinks)
  })
  return 
  };


  getFamousCocktailsList()

