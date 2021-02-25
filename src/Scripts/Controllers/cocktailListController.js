import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import paginationView from '../Views/cocktailListaginationView';
import resultsView from '../Views/cocktailListresultsView';
import * as model from '../Models/CocktailListmodel';



const cocktailsController = async function () {
  await model.fetchCocktailsController()

  const { results } = model.state.search

  resultsView.render(results.slice(0, 6))
}


const getSearchResultsPage = function (page = model.state.search.page) {
  model.state.search.page = page;

  const start = (page - 1) * model.state.search.resultsPerPage;
  const end = page * model.state.search.resultsPerPage;

  return model.state.search.results.slice(start, end)
}


const controlPagination = function (goToPage) {

  resultsView.render(getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);

}
controlPagination()

const init = () => {
  cocktailsController();
  paginationView.addHanderClick(controlPagination);
}

init();