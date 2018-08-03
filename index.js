const movies = document.querySelectorAll('.portfolio-item.d-block.mx-auto')
const url =`https://swapi.co/api/films/`

fetch(url)
.then(resp => resp.json())
.then(obs =>{

})
