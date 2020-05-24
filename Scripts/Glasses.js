let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'

const aGlass = [];

function addGlassList() {

  let glassList = document.getElementById('glass-list');
  let newGlass = document.createElement('div')

  aGlass.map(glass => {
    //console.log(glass.Glass)
    newGlass.setAttribute('class', 'css-glass modal fade');
    newGlass.setAttribute('id', 'exampleModal');
    newGlass.innerHTML = `

    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Want to become a mixologist? </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body col-lg-12 row mx-auto">
          ${glass.Glass.join(' ')}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>   
    `
  });
  glassList.appendChild(newGlass);
};


let getAllGlasses = document.getElementsByClassName('add-glass-btn')[0];
getAllGlasses.onclick = getGlasses;

function getGlasses() {

  let glassList = document.getElementById('glass-list')

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let allGlasses = {
        Glass: data.drinks.map(glass => {
          return (
            
            
            `   
            <li class='col-lg-4 card '>${glass.strGlass}</li>        
            `
                  
            );
          })
        };
        glassList.innerHTML = '';
      
        aGlass.push(allGlasses);
        //console.log(aGlass)
        
        addGlassList()
        
      });
    };

  // let quitGlass = document.getElementsByClassName('remove-glass-btn')[0]

  ///// Remove-glass
/*   function removeGlass() {
    let glassList = document.getElementById('glass-list');

    glassList.removeChild(glassList.lastChild);


  }

  quitGlass.onclick = removeGlass


} */

