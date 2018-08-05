const h2naves = Array.from(document.querySelectorAll('.naves'))
const urlnaves =`https://swapi.co/api/starships/`
const descnaves = document.querySelectorAll('.descnaves')

loadnaves()

export function loadnaves(){
    fetch(urlnaves)
    .then(resp => resp.json())
    .then(starships => loaddata3(starships))
}
    
function loaddata3(starships){
    for( let i=0; i<h2naves.length; i++){
        h2naves[i].innerHTML =`${starships.results[i].name}`
        descnaves[i].innerHTML = `<p style="color: white; font-size:20px">Model: ${starships.results[i].model}</p>
        <p style="color: white; font-size:20px">Manufacturer: ${starships.results[i].manufacturer}</p>
        <p style="color: white; font-size:20px">Starship Class: ${starships.results[i].starship_class}</p>`
    }
}