function addPrintButton() {
  const textArticle = document.querySelector("#resultText");
  console.log(textArticle)
  textArticle.insertAdjacentHTML('beforeend', '<a href="javascript: window.print()"><button>Print</button></a>')
}

addPrintButton()

console.log('test')