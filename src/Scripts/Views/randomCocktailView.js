import View from './View';

class RandomCocktailView extends View {

    _parentEl = document.querySelector('.random--cocktail');
    _generateMarkup() {
        return `
              <p>
              Name: ${this._data.name}<br>
              Glass: ${this._data.glass}<br>
              Ingredients: ${this._data.ingredients.map((ing) => `<span>${ing.drink}</span>`)} <br>
              Instructions: ${this._data.instructions}<br>
              <img src="${this._data.image}"><br>
              </p>
          `;
    }
}

export default new RandomCocktailView();