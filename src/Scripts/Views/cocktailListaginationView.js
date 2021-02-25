import  View from './View';
import icons from '../../img/icons.svg'; 

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');

    addHanderClick(handler){
        this._parentEl.addEventListener('click', function(e){
            
            const button = e.target.closest('.btn--inline');
            if(!button) return;

            const goToPage = +button.dataset.goto;
            handler(goToPage)
        })
    }

    _generateMarkup() {

        const currentPage = this._data.page;
        const numPages = Math.ceil(100 / this._data.resultsPerPage);
      
        //Page 1 and more pages

        if(currentPage === 1 && numPages > 1){
            return `
         <button data-goto=${currentPage + 1} class="btn--inline pagination__btn--next">
           <span>Page ${currentPage + 1}</span>
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
           </svg>
         </button> 
           `
        }
        //Page 1 and no more pages
       

        //Last page
        if(currentPage === numPages){
            return `
             <button data-goto=${currentPage - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
 
            `
        }
        //Other Page
        if(currentPage < numPages){
            return `
            <button data-goto=${currentPage - 1} class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${currentPage - 1}</span>
         </button>
         <button data-goto=${currentPage + 1}  class="btn--inline pagination__btn--next">
           <span>Page ${currentPage +1}</span>
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
           </svg>
         </button> 
           `
        }
    }
}


export default new PaginationView();