let url='https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});

//letglassWikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${cocktail, cocktail}`

/*function whatever(cocktail) {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cocktail, cocktail}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
          let mycocktail = myJson.originalimage.source
            console.log(mycocktail)
      })
}
whatever('Collins glass')*/

const aGlass = [];

function addGlassList(){

    let glassList = document.getElementById('glass-list');
  
    aGlass.forEach(glass =>{

    let newGlass= document.createElement('div')
    newGlass.setAttribute('class', 'css-glass')
    console.log(newGlass)
    newGlass.innerHTML = `
    Vasos: ${glass.Glass2}
     ${glass.Glass3}<br>
     ${glass.Glass4}<br>
     ${glass.Glass5}<br>
     ${glass.Glass6}<br>
     ${glass.Glass7}<br>
     ${glass.Glass8}<br>
     ${glass.Glass9}<br>
     ${glass.Glass10}<br>
     ${glass.Glass11}<br>
     ${glass.Glass12}<br>
     ${glass.Glass13}<br>
     ${glass.Glass14}<br>
     ${glass.Glass15}<br>


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
            Glass:data.drinks[0].strGlass,
            Glass2:data.drinks[1].strGlass,
            Glass3:data.drinks[2].strGlass,
            Glass4:data.drinks[3].strGlass,
            Glass5:data.drinks[4].strGlass,
            Glass6:data.drinks[5].strGlass,
            Glass7:data.drinks[6].strGlass,
            Glass8:data.drinks[7].strGlass,
            Glass9:data.drinks[8].strGlass,
            Glass10:data.drinks[9].strGlass,
            Glass11:data.drinks[10].strGlass,
            Glass12:data.drinks[11].strGlass,
            Glass13:data.drinks[12].strGlass,
            Glass14:data.drinks[13].strGlass,
            Glass15:data.drinks[14].strGlass,
            Glass16:data.drinks[15].strGlass,
            Glass17:data.drinks[16].strGlass,
            Glass18:data.drinks[17].strGlass,
            Glass19:data.drinks[18].strGlass,
            Glass20:data.drinks[19].strGlass,
           
        }
        

        glassList.innerHTML ='';
        aGlass.push(oneMoreGlass);
      
        addGlassList()
        
    });
    
}

addNewGlass.onclick = oneGlass

