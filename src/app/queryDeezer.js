let nomeMusica = document.querySelector('.musica-search')

let buttonSearch = document.querySelector('.submit')

buttonSearch.addEventListener('click', function(){
  if(nomeMusica == ""){
    console.log('Escreva uma música')
  }else{
    console.log(nomeMusica.value)
  }
})

console.log('Olá mundo')


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//   params: {q: 'Tupac'},
//   headers: {
//     'X-RapidAPI-Key': '00409c6540msh20ba7d743bf8d70p10020djsnb1ca8717e8c6',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });