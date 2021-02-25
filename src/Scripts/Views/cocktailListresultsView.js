import View from './View';

class ResultsView extends View {
    _parentEl = document.querySelector('.cocktail--list');

    _generateMarkup() {
    
        return this._data.map((drink) => {
            return `
            
            <li class='random--cocktail' style ='list-style-type:none; font-size:1.4em'> ${drink.name}</li>
            <img class='glass-class d-block mx-auto rounded rounded-circle' src='${drink.image}'/> 
       `
        })
        
    }

}

export default new ResultsView();