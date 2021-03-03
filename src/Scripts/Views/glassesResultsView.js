import View from './View';

class GlassesResultsView extends View {
   _parentEl = document.querySelector('#glass-list');
   
   _generateMarkup(){
      return this._data.map((glass) => {
       return glass.glassName ? `<li class='unique-glass'>${glass.glassName}</li>` : null
      }).join('')
   }
}

export default new GlassesResultsView();