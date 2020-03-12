import { renderResults } from './render.js'

function getData(id) {
  console.log(id)
    //   /*** Fetching data -> refactor into module later ***/
  const main = document.querySelector('main');
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const query = id;
  const key = 'f60b69054b02f50180d9c088e06270ea';
  const key2 = '1e19898c87464e239192c8bfe422f280';
  const secret = '34dd0c6e69370e1b0d2b06fb8343c17f';
  const secret2 = '4289fec4e962a33118340c888699438d';
  const key3 = '0076bc3bc11d080e07a303360178002a';
  const secret3 = '187b973dc49e054fa7635313a9c8540f'
  const detail = 'Default';
  const clasification = "classification:informatieboek";
  const onlyBooks = 'type(book)';
  const audience = 'jeugd';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  const config = {
    Authorization: `Bearer ${secret}`
  };


  // const testData = JSON.parse(localStorage.getItem('obaAPI'))
  // renderResults(testData, id)




  fetch(url, config)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      localStorage.setItem('obaAPI', JSON.stringify(data.results));
      // console.log(localStorage.obaAPI)
      renderResults(data.results)

      // return data
    })
    .catch(err => {
      console.log(err);

      return err
    });

}

export { getData }