import View from './View';

class RandomCocktailView extends View {

    _parentEl = document.querySelector('.random--cocktail');
    _generateMarkup() {
        return `
              <div>
                <p class='random--cocktail'>Name: ${this._data.name}</p><br>
                <p class='random--cocktail'>Glass: ${this._data.glass}</p><br>
                <p class='random--cocktail'>Ingredients: ${this._data.ingredients.map((ing) => `<span>${ing.drink}</span>`)}</p><br>
                <p class='random--cocktail'>Instructions: ${this._data.instructions}</p><br>
                <img class='glass-class rounded rounded-pill d-block mx-auto' src="${this._data.image}"><br>
              </div>
          `;
    }
}

export default new RandomCocktailView();