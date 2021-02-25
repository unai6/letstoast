import View from './View';

class ResultsView extends View {
    _parentEl = document.querySelector('.cocktail--list');

    _generateMarkup() {
    
        return this._data.map((drink) => {
            return `
            
            <li style ='list-style-type:none; font-size:1.4em'> ${drink.name}</li>
            <img class='img-FC' src='${drink.image}'/> 
            <hr style='border:1px solid #f08080'>
       `
        })
        
    }

}

export default new ResultsView();