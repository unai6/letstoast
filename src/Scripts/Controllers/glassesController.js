import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import * as model from '../Models/GlassesModel';
import glassesView from '../Views/glassesResultsView';

const showGlasses = document.querySelector('.add-glass-btn')

const fetchGlassController = async () => {
  await model.getGlasses();
  const { glasses } = model.state
  glassesView.render(glasses);

}

showGlasses.addEventListener('click', fetchGlassController)


