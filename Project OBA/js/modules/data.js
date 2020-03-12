import data from './categories.js'

// Gives all main categorie names
function getCategories(data) {
  const maincategories = data.categories.map((categorie, index, array) => {
    return categorie.categorie
  })
  return maincategories
}

function getSubCategories(id) {
  const subCategories = data.categories.filter((element, index, array) => {
    const checkedSubCategories = data.categories[index].categorie.id == id
    return checkedSubCategories
  })
  return subCategories[0].subcategories
}

function getNameFromId(id) {
  const name = data.categories.filter((element, index, array) => {
    const checkedNames = data.categories[index].categorie.id == id
    console.log(checkedNames)

    const subArray = data.categories[index].subcategories
    console.log(subArray)
      // const filterArray = subArray.filter((element, index, array) => {
      //   const nameFromId = subArray[index].id == id
      //   console.log(nameFromId)
      //   })
  })
}






export { getCategories, getSubCategories, getNameFromId }