import data from './categories.js'
import { getCategories, getSubCategories, getNameFromId } from './data.js'
import { renderCategories, renderSubCategories, renderResults } from './render.js'
import { getData } from './obaApi.js'


function router() {
  console.log('router.js')
  routie({
    '': () => {
      startApp()
    },
    ':id': (id) => {
      userInput(id)
    },
    'results/:id': (id) => {
      results(id)
    }
  });
}

function startApp() {
  const categories = getCategories(data);
  renderCategories(categories)
}

function userInput(id) {
  const categoryAarde = document.querySelector('#aarde')
    // Check if the list categories is loaded
  categoryAarde !== null ? console.log('Categories are loaded') : startApp()
  const selectedId = document.getElementById(id)
  const classSelected = document.querySelector('.selected')

  // Remove the class="selected" from the last category
  selectedId.classList.add('selected')
  classSelected !== null ? classSelected.classList.remove('selected') : console.log('get subCategories')
  const subCategories = getSubCategories(id)
  renderSubCategories(subCategories, id)
  return id
}

function results(id) {

  // getNameFromId(id)


  getData(id)





}

export { router }