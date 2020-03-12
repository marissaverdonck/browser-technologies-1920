import { getCategories } from "./data.js";
const categoryList = document.getElementById('categoryList')
const resultList = document.getElementById('resultList')


// render data
function renderResults(data, id) {
  const categoryList = document.querySelector('#categoryList')
  categoryList.remove()
  const chooseCategory = document.querySelector('#chooseCategory')
  chooseCategory.remove()

  console.log(data)
  resultList.insertAdjacentHTML('afterbegin', `<a href=""><img src="./img/triangle.png"><p>Ga terug</p></a>
  <div><button>Filter</button><button>Sorteer</button></div>  
  `)

  data.reduce(function(acc, cur, ind) {
    resultList.insertAdjacentHTML('beforeend', `
<article>

<img src="${
   cur.coverimages ? cur.coverimages[1] : '../img/rectangle.png'
 }">
 <h3>${cur.titles[0]}</h3>
</article>
`)

  }, 0)
}


function renderCategories(categories) {
  categories.reduce(function(acc, cur, ind) {
    categoryList.insertAdjacentHTML('beforeend', `
      <article id="${cur.id}">
      <a href="#${cur.id}">
      <div> ${cur.image}</div>
      <p>${cur.name}</p>  
     </a>
     <div class="wrapper"></div>
      </article>
   `)
  }, 0)
}

function renderSubCategories(subCategories, id) {
  const list = document.querySelector('.list')
  list !== null ? (list.remove(), renderArray()) : renderArray()

  function renderArray() {
    const subCategoryList = document.querySelector('#' + id + '> div')
    subCategoryList.insertAdjacentHTML('afterbegin', ` <ul class="list"></ul>`)
    const list = document.querySelector('.list')

    subCategories.reduce(function(acc, cur, ind) {
      list.insertAdjacentHTML('afterbegin', `
      <li>
      <a href="#results/${cur.id}">
      <span>${cur.name}
      </span>
      </a>
      </li>
    `)
    }, 0)
  }
}








export { renderResults, renderCategories, renderSubCategories }